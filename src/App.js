import './App.css';
import { Route, Routes, useParams, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/Beer';
import RandomBeer from './pages/Random';



function App() {

  function Child() {
    let { id } = useParams();
  }
   return (
    <div className="App">

  <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/allBeers" element={<AllBeers />} />
       <Route path="/beers/:id" element={<SingleBeer />}/>
       <Route path="/random" element={<RandomBeer />}/>
  </Routes>

  
  
    </div>
  );
}



export default App;
