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


                   <div className='heading'><h2 className='heading'>{beers.name}</h2><h2 className='darkGray'>{beers.attenuation_level}</h2></div>
                   <div className='heading'>
                    <h3 className='darkGray'>{beers.tagline}</h3>
                    <p className='firstBrewed'>{beers.first_brewed}</p>
                    </div>
                    <div className='beerText'>
                    <p className='description'>{beers.description}</p>
                    <p className='darkGray'>{beers.contributed_by}</p></div>
                </div>
            </div>
            </div>
  );
  }

 
export default SingleBeer;