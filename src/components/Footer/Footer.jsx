import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logoo.png" alt="" width={120} />

                <span className="secondaryText">
                    Our Goal is to provide a simpler way to our <br/>
                    clients to purchase their dream homes.
                </span>
            </div>
            {/* right side */}
            <div className="flexColStart f-right">
              <span className='primaryText'>Information</span>
              <span className='secondaryText'>Kigali, kk 435, Rwanda</span>

              <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Contact</span>
              <span>About Us</span>
              </div>
            </div>
        </div>
      </section>
    )
}

export default Footer;