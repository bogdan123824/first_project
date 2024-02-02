import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './style.css';

const App: React.FC = () => {
  const [isLogin, setIsLogin2] = useState(true);

  const handleSwitchMode = () => {
    setIsLogin2(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login RegisterClick={handleSwitchMode} />
      ) : (
        <Register LoginClick={handleSwitchMode} />
      )}
    </div>
  );
};

export default App;
