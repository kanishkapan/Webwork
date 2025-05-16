import React from 'react';

const FullWidthVideoSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="aspect-video w-full">
        <video
          className="w-full h-full object-cover"
          src="./src/assets/Herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default FullWidthVideoSection;
