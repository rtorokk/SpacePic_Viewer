import React, { useState } from 'react';

function ImageCard({ data }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="image-card">
      <h2>{data.title}</h2>
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title} className="image" />
      ) : (
        <iframe
          src={data.url}
          title={data.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="video"
        ></iframe>
      )}
      <p className="description">
        {showMore ? data.explanation : `${data.explanation.slice(0, 100)}...`}
      </p>
      <button onClick={toggleShowMore} className="toggle-button">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default ImageCard;