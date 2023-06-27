import React from 'react'



const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p className='footer__copyright'>Copyright Sivin Viswanath &copy; {year} </p>
    </div>
  )
}

export default Footer
