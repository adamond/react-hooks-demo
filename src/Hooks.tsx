import React, { useEffect, useState } from 'react';

const Hooks: React.FC = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log(`Count updated ${count} to with basic hooks`);
  }, [count]);

  return (
    <div className={dark ? 'dark' : ''}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
    </div>
  );
};

export default Hooks;
