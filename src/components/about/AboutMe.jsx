import React from 'react'
import './about.css'
import PicOfMe from './me.jpg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Author'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='text-uppercase about-heading'>about me</h1>
          <p>
            Hello! I am Himanshu. I have been learning and developing websites for over 2
            years. I'm Full-Stack Web Developer. Technologies I use is
            MERN(MongoDB, Express, ReactJS and NodeJS). I create responsive
            websites that are displayed on all devices desktops and smartphones.
            Of course, before I begin developing any webapp, Landing Page,
            Business Website or E-commerce, I need to have a ready-made project
            layout (sketch). And I’m ready to do this for you, before we start
            developing your website, we will discuss all the details of your
            down with you.
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
