import React from 'react'
import { Link } from 'react-router-dom';
export const Contact=()=>{
    return(
        <div>
            <h1 style={{color:'blue'}}>Contact</h1>
            <button style={{backgroundColor:'black'}}><Link style={{color:'white'}} to='/'>Go back to home</Link></button>
            </div>
    )
}
export default Contact;