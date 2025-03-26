import React, { Suspense, useState } from 'react';

const HeavyComponent = React.lazy(() => import('./components/HeavyComponent.jsx'));

const App = () => {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Code Splitting Demo</h1>
      <button
        onClick={() => setShowHeavy(!showHeavy)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {showHeavy ? 'Hide Heavy Component' : 'Load Heavy Component'}
      </button>

      {showHeavy && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default App; 