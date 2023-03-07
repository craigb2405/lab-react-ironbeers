import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';



function App() {
  return (
    <div className="App">
    <Navbar/>
  <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/allBeers" element={<AllBeers />} />
  </Routes>
  
    </div>
  );
}

export default App;
