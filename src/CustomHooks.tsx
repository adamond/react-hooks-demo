import React, { useState } from 'react';
import useLogUpdateState from './customHook';

const CustomHooks: React.FC = () => {
  const [count, setCount] = useLogUpdateState(0, 'Count');
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
    </div>
  );
};

export default CustomHooks;
