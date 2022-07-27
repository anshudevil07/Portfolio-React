import React from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
  return (
    <section className='services'>
      <h1 className='py-5'>my services</h1>
      <div className='container'>
        <div className='row'>
          {/* box 1 */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icons' icon={faDesktop} />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individualy and always focus on the
                result
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icons' icon={faFileCode} />
              </div>
              <h3>Web Development</h3>
              <p>Your website will be build with a new proven technologies.</p>
            </div>
          </div>
          {/* box 3 */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icons' icon={faFacebookF} />
              </div>
              <h3>Facebook ADS SMM</h3>
              <p>
                Your potential clients will see your services or product on
                facebook.
              </p>
            </div>
          </div>
          {/* box 4 */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icons' icon={faGoogle} />
              </div>
              <h3>Google Adwords</h3>
              <p>
                Your services or product will appear at the top of the Google
                search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
