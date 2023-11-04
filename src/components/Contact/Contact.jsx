import React from 'react';
import './Contact.css';
import { MdCall, BsFillChatDotsFill, HiChatBubbleBottomCenter } from 'react-icons/md'; 
import Contact from './Contact';

 Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColstart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We believe a good place to live can make your life better.
          </span>

          {/* first row */}
          <div className="flexStart contactModes">
            <div className="flexcolstart row">
              <div className="flexColcenter mode">
                <div className="flexstart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColstart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+250 780 608 133</span>
                  </div>
                </div>
                <div className="flexCenter Button">Call Now</div>
              </div>
            </div>
          </div>

          {/* second mode */}
          <div className="flexcolStart contactModes">
            <div className="flexcolstart row">
              <div className="flexColcenter mode">
                <div className="flexstart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColstart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+250 780 608 133</span>
                  </div>
                </div>
                <div className="flexCenter Button">Chat Now</div>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="flexStart contactModes">
            <div className="flexcolstart row">
              <div className="flexColcenter mode">
                <div className="flexstart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColstart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+250 780 608 133</span>
                  </div>
                </div>
                <div className="flexCenter Button">Video Call Now</div>
              </div>
            </div>
          </div>

          {/* fourth mode */}
          <div className="flexcolStart contactModes">
            <div className="flexcolstart row">
              <div className="flexColcenter mode">
                <div className="flexstart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColstart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+250 780 608 133</span>
                  </div>
                </div>
                <div className="flexCenter Button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
