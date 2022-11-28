import './App.scss';
import {useState} from 'react';

function App() { 
  
 const [color, setColor] = useState(true); 
 const [count, setCount] = useState(1);

 const now777 = (a) => {
  console.log ('NOW is ' + a);
}
 
 const change = () => {
  setColor(!color); // Neteisinga!
 }

 const add = () => {
  setCount(count => count +1) // Redagavimui 
  setCount(count => count +1)
  setCount(count => count +1)
 }

 const set42 = () => {
  const meaningOfLife = 42; // Priskyrimui
  setCount(meaningOfLife);
 }
  
  return (

    <div className="App">
      <div className="App-header">
      <h1 style={{color: color ? 'crimson' : 'skyblue'}}>Bebras {count}</h1>
      <button onClick={change}>Do color</button>
      <button onClick={add}>Add</button>
      <button onClick={set42}>42</button>
      <button onClick={() => now777('9:00')}>Press on 9:00 PM</button>
      <button onClick={() => now777('10:00')}>Press on 10:00 PM</button>
      <button onClick={now777}>Press on 11:00 PM</button>
      <button onClick={() => console.log('NOW!!!!')}>Press on 7:00 PM</button>
      </div>
    </div>
  );
};

export default App;
