import React from 'react';
import NotFoundImage from '../assets/404_img.JPG';

function NotFoundPage() {
  return (
    <div className="not-found-container" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>

      <h1 style={{ 
        backgroundColor: '#c5d7cd', 
        border: '3px solid black', 
        padding: '10px 20px', 
        borderRadius: '8px', // Optional: rounded corners for the box
        margin: '10px 0' // Space above/below the h1 box
      }}>
        404 - Page Not Found
      </h1>

      <p style={{ 
        backgroundColor: '#c5d7cd', 
        border: '3px solid black', 
        padding: '8px 15px', 
        borderRadius: '5px', // Optional: rounded corners
        margin: '10px 0' // Space above/below the p box
      }}>
        Oops! The page you're looking for...does not, exist!
      </p>
      
      <img 
        src={NotFoundImage} 
        alt="Page Not Found" 
        className="not-found-image" 
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />

      <p style={{ 
        backgroundColor: '#c5d7cd', 
        border: '3px solid black', 
        padding: '8px 15px', 
        borderRadius: '5px', // Optional: rounded corners
        margin: '10px 0' // Space above/below the p box
      }}>
        Get OUT OF HERE, Mane!!
      </p>
    </div>
  );
}

export default NotFoundPage;
