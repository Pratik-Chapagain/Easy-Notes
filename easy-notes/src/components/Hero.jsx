import React from "react";

function Hero() {
  return (
    <section
      style={{
        position: 'relative', // Positioning context for absolute elements
        padding: '50px 20px',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Rectangle 1 */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '670px',
          height: '517px',
          left: '387px',
          top: '170px',
          background: '#7C89CA',
          border: '1px solid #D9D9D9',
        }}
      ></div>

      {/* Add Book */}
      <div
        style={{
          position: 'absolute',
          width: '464px',
          height: '253px',
          left: '488px',
          top: '223px',
          background: 'url("/path-to-image.png") no-repeat center center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Hero Icon */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
      </div>
    </section>
  );
}

export default Hero;
