import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Clock from './components/clock/Clock';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  function handleClick() {}

  return (
    <div className='App'>
      <h1>Shift Keeper</h1>
      <Clock time={time} />
      <div className='card'>
        <button onClick={() => handleClick()}>Clock-in</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
