import React from 'react';
import JunQiBoard from './components/JunQiBoard';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Junqi Demo</h1>
      <JunQiBoard />
    </div>
  );
};

export default App;
