import { useState } from 'react';
import './App.css';
// import ContainerPhotos from './components/ContainerPhotos/ContainerPhotos';
// import NavBar from './components/NavBar/NavBar';
// import SearchBar from './components/SearchBar/SearchBar';

import { ContainerPhotos, NavBar, SearchBar } from './components';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRest = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <NavBar count={count} />
      <SearchBar />
      <ContainerPhotos title="Latest Laptops" count={count} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRest}>Rest</button>
    </div>
  );
}

export default App;
