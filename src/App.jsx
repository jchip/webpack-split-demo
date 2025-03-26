import React, { Suspense, useState, useEffect } from 'react';

const HeavyComponent = React.lazy(() => import('./components/HeavyComponent.jsx'));

const App = () => {
  const [showHeavy, setShowHeavy] = useState(false);
  const [MaterialUIComponent, setMaterialUIComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the MaterialUIComponent
    import('./components/MaterialUIComponent.jsx')
      .then(module => {
        setMaterialUIComponent(() => module.default);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading MaterialUIComponent:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Code Splitting Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
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

      <div>
        <h2>Automatically Loaded Component</h2>
        {isLoading ? (
          <p>Loading Material UI component...</p>
        ) : (
          MaterialUIComponent && <MaterialUIComponent />
        )}
      </div>
    </div>
  );
};

export default App; 