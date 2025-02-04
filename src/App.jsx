// In your App.js
import { useState } from 'react';

const App = () => {
  // useState to track the count
  const [count, setCount] = useState(0);

  // Styles (optional)
  const styles = {
    background: {
      background: '#5e7e7c',
    },
    color: {
      color: '#fff',
    },
    font: {
      fontFamily: `'Oswald', sans-serif`,
      lineHeight: '2rem',
    },
  };

  return (
    <div
      style={{ ...styles.background, ...styles.font }}
      className='d-flex flex-column min-vh-100'
    >
      <h2 style={{ color: '#fff' }}>Welcome to my React Portfolio!</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count is: {count}</p>
    </div>
  );
};

export default App;

