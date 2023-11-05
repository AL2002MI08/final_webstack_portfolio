// Import React and necessary icons
import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contacts</span>
          <span className='primaryText'>Easy to Contact us</span>
          <span className='secondaryText'>We believe we can recommend and help you <br/>  find your dream house at an affordable price.</span>


          <div className="flexColStart contactModes">
            {/* 1st row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>078 673 5111</span>
                  </div>
                </div>
                <div className="flexCenter btn">Call Now</div>
              </div>

              {/* 2nd row */}


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>078 673 5111</span>
                  </div>
                </div>
                <div className="flexCenter btn">Chat Now</div>
              </div>
            </div>

            {/* 2nd row */}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>078 673 5111</span>
                  </div>
                </div>
                <div className="flexCenter btn">Video Call Now</div>
              </div>

              {/* 2nd row */}


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>078 673 5111</span>
                  </div>
                </div>
                <div className="flexCenter btn">Message Now</div>
              </div>
            </div>
          </div>

        </div>

        {/* right */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;

