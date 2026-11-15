// functions/api/submit.js
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, email, note } = await request.json();

    // Server-side validation 
    if (!name?.trim() || !email || !note) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send via the Cloudflare Email Sending binding (env.EMAIL)
    await env.EMAIL.send({
      to: 'eddwothewar@gmail.com',                       // Verified Email Routing
      from: 'commission@eddwithoutthewar.com',           // Commission Email Address
      subject: `New Commission Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nNote: ${note}`,
    });

    // Storing email info in database
    try{
         await env.DB.prepare(
            "INSERT INTO commissions (name, email, note) VALUES (?, ?, ?)"
            ).bind(name, email, note).run();
    } catch (dbError) {
    //  console.error('Database error:', dbError);
        console.error('Database error encountered');
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Send email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}