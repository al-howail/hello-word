import React from 'react'
import {Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        
        <header>
      <h1>Job Zila</h1>

      <nav>
        <ul>
          <li>
            <Link to= "/"> Home </Link> 
          </li>

        
          <li>
          <Link to= "Joblistig"> Job Listing </Link> 
          </li>
        
          <li>
            <Link to= "Termsofservice"> Terms of service </Link>
          </li>
          <li>
          <Link to= "Privacypolicy"> Privacy Policy</Link>
          </li>
          <li>
          <Link to= "Contact"> Contact Us </Link>
          </li>
         
        </ul>
      </nav>
    </header>
      
        
    </div>
  



)




}

export default Header