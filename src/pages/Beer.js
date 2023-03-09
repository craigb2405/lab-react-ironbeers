import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link, NavLink, Router, useParams } from 'react-router-dom'

 
function SingleBeer() {

    let { id } = useParams();

    const [beers, setBeers] = useState([])
  
  useEffect(()=>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((result)=>{
        console.log(id)
        setBeers(result.data)
    })
  },[])

 
 
  

  return (
    <div>
        <Navbar/>
        <div className='container' key={beers._id}>
                <div className='beerCardInd'>
                <div className='beerImg'><img src={beers.image_url}/></div>
                    <div className='beerText'><h2>{beers.name}</h2>
                    <p className='tag'>{beers.tagline}</p>
                    <p className='firstBrewed'>{beers.first_brewed}</p>
                    <p className='attenuation'>{beers.attenuation_level}</p>
                    <p className='description'>{beers.description}</p>
                    <p><b>Created By:</b> {beers.contributed_by}</p></div>
                </div>
            </div>
            </div>
  );
  }

 
export default SingleBeer;