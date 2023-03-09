import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/Beer';
import RandomBeer from './pages/Random';
import NewBeer from './pages/NewBeer';



function App() {

  
   return (
    <div className="App">

  <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/allBeers" element={<AllBeers />} />
       <Route path="/beers/:id" element={<SingleBeer />}/>
       <Route path="/random" element={<RandomBeer />}/>
       <Route path="/NewBeer" element={<NewBeer />}/>
  </Routes>

  
  
    </div>
  );
}



export default App;
