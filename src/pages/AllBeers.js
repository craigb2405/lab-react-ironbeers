import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link, NavLink } from 'react-router-dom'

 
function AllBeers() {
    const [beers, setBeers] = useState([])
  
  useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((result)=>{
        console.log(result.data)
        setBeers(result.data)
    })
  },[])
  return (
    <div>
        <Navbar/>
     {beers.map((individualBeer)=>{
        return(
            <div className='container' key={individualBeer._id}>
                <div className='beerCard'>
                <div className='beerImg'><NavLink className="listItem" to={`/beers/${individualBeer._id}`}><img src={individualBeer.image_url}/></NavLink></div>
                    <div className='beerText'><NavLink className="listItem" to={`/beers/${individualBeer._id}`}><h2>{individualBeer.name}</h2></NavLink>
                    <p className='tag'>{individualBeer.tagline}</p>
                    <p><b>Created By:</b> {individualBeer.contributed_by}</p></div>
                </div>
            </div>
        )
     })}
    </div>
  );
}
 
export default AllBeers;