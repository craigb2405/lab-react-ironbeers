import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../assets/HomeNav.png'

function Navbar() {
  return (
    <div><Link to="/"><img src={HomeNav} alt="homeButton"/></Link></div>
  )
}

export default Navbar