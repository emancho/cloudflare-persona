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

    // Forward to the Email Proxy Worker via Service Binding
    const workerResponse = await env.EMAIL_WORKER.fetch(
      new Request('https://eddwithoutthewar.com/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, note }),
      })
    );

    if (!workerResponse.ok) {
      const errorText = await workerResponse.text();
      console.error('Email worker error:', workerResponse.status, errorText);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store in database (non-fatal if it fails)
    try {
      await env.DB.prepare(
        "INSERT INTO commissions (name, email, note) VALUES (?, ?, ?)"
      ).bind(name, email, note).run();
    } catch (dbError) {
      console.error('Database insert failed:', dbError.message);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Submit handler error:', error.message);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}