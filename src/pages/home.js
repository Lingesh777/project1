import React from 'react'
import {Link } from 'react-router-dom'

export const Home=()=>{
    return(
        <div>
        
        <button style={{backgroundColor:'black'}}><Link style={{color:'white'}} to="/c">Contact</Link></button>
        <button style={{backgroundColor:'black'}}><Link style={{color:'white'}} to="/s">Services</Link></button>

        </div>
    )
}

export default Home