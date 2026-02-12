import React from 'react';
import NotFoundImage from '../assets/404_img.JPG';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <img src={NotFoundImage} alt="Page Not Found" className="not-found-image" />
      <p>Get OUT OF HERE!!</p>
    </div>
  );
}

export default NotFoundPage;
