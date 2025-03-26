import React from 'react';

const HeavyComponent = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '20px' }}>
      <h2>Heavy Component</h2>
      <p>This component was loaded on demand!</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeavyComponent; 