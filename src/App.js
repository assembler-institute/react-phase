import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
