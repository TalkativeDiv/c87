import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Canvas from './components/Canvas';
import './assets/index.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col min-w-[100vw] min-h-[100vh]">
      <br />
      <br />
      <div
        className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span className="font-medium">Hello!</span> Press any of the keys R,
        G,Y, P, or B to draw a ranger.
      </div>
      <h1 className="font-bold text-4xl">Canvas Game</h1>
      <br />
      <Canvas />
    </div>
  );
}

export default App;
