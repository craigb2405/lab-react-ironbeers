import { useEffect, useState } from 'react'
import axios from 'axios'

 
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
     {beers.map((individualBeer)=>{
        return(
            <div className='container' key={individualBeer._id}>
                <div className='beerCard'>
                    <div className='beerImg'><img src={individualBeer.image_url}/></div>
                    <div className='beerText'><h2>{individualBeer.name}</h2>
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