import React from 'react'
import Typed from 'react-typed'
import './header.css'

const Header = () => {
  return (
    <section className='header-wrapper'>
      <div className='main-info'>
        <h1>web development and website promotion</h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Design',
            'Web Development',
            'Facebook Ads SMM',
            'Google Adwords',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#' className='btn-main-offer'>
          contact me
        </a>
      </div>
    </section>
  )
}

export default Header