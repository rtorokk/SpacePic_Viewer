import React from 'react';

function ImageCard({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
      ) : (
        <iframe
          src={data.url}
          title={data.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: '100%', height: '500px' }}
        ></iframe>
      )}
      <p>{data.explanation}</p>
    </div>
  );
}

export default ImageCard;