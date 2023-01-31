import React from 'react'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>Hey , I am Himanshu</h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Design',
            'Web Development',
            
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
       
      </div>
    </section>
  )
}

export default Header
