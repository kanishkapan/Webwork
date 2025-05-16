import React from 'react';

const FullWidthImage = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80';

  return (
    <div className="w-full">
      <img
        src={imageUrl}
        alt="Nature landscape"
        className="w-full h-auto object-cover"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default FullWidthImage;
