import './App.css';
import Counter from './Counter/Counter';
import Todos from './Todos/Todos';
import Weather from './Weather/Weather';

function App() {
  return (
    <div className="App">
      {/* <p>Hello</p> */}
      <Weather />
      <Counter />
      {/* <Todos /> */}
    </div>
  );
}

export default App;
