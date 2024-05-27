import React from 'react'
import { Link } from 'react-router-dom'

const Footer  = () => {
  return (
    <div>

<footer>
      <p>
        &copy; 2024 My Job Board. All rights reserved. |
        <Link to= "Contact"> Contact Us </Link> | <Link to= "Termsofservice"> Terms  </Link> |
        <Link to= "Privacypolicy"> Privacy  </Link>
      </p>
    </footer>

     </div>
  )
}
 
export default Footer