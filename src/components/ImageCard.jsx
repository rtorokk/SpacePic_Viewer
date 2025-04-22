import React, { useState } from 'react';

function ImageCard({ data }) {
  // State to toggle between showing more or less of the description
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the showMore state
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="image-card">
      {/* Display the title of the APOD */}
      <h2>{data.title}</h2>

      {/* Conditional rendering for image or video based on media_type */}
      {data.media_type === 'image' ? (
        // Render the image if media_type is "image"
        <img src={data.url} alt={data.title} className="image" />
      ) : (
        // Render the video iframe if media_type is "video"
        <iframe
          src={data.url}
          title={data.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="video"
        ></iframe>
      )}

      {/* Display the description with a "Show More/Less" toggle */}
      <p className="description">
        {showMore ? data.explanation : `${data.explanation.slice(0, 100)}...`}
      </p>

      {/* Button to toggle between showing more or less of the description */}
      <button onClick={toggleShowMore} className="toggle-button">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default ImageCard;