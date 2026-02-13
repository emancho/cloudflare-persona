//== Components
//== Material UI
import {Typography, Stack, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
//== Constants
import {CROCHET_SAMPLES} from '../Constants'

// == Description:
// The CrochetSection - This is a compontent that is used in the Crochet Corner page. 
// Contains a text box  and a isting  of my crochet hat pieces. 

const crochetCaption = `Welcome to the Crochet Corner. This is where I will be posting my crochet pieces. 
If you're interested in a custom piece, there's a form waiting for you below and I'll get back to you as soon as possible. `

function CrochetSection() {
  return (
        <>
            <Stack direction="column" spacing={1}></Stack>
                <Typography 
                    variant="body1" 
                    sx={{ 
                    fontSize: { xs: '3.2vw', sm: '2vw' }, // Responsive logic right here
                    textAlign: 'center',                // Center-aligns the text
                    color: '#0a3e0a',                 // Dark green color for the caption
                    padding: 2,
                    backgroundColor: '#e8f0e8', 
                    borderRadius: '4px', 
                    border: '4px solid white',
                    }}>
                    {crochetCaption}
                </Typography>
{/* 
                <ImageList sx={{ width: 500, height: 450 }}>
                    {CROCHET_SAMPLES.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Style Type: {item.author}</span>}
                            position="below"
                        />
                        </ImageListItem>
                ))}
                </ImageList> */}
                <ImageList
    sx={{
        width: 500,
        height: 450,
        // Optional: Hide the scrollbar if content still overflows
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
    }}
    cols={3} // Increase the number of columns
>
    {CROCHET_SAMPLES.map((item, idx) => (
        <ImageListItem key={idx}>
            <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>Style Type: {item.author}</span>}
                position="below"
            />
        </ImageListItem>
    ))}
</ImageList>





            <Stack/>
        </>

  );  
}

export default CrochetSection;