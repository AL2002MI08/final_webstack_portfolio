// Import React and necessary icons
import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColstart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We're always ready to help by providing the best services for you. We believe a good place to live can make your life better.
          </span>

          {/* Contact modes */}
          <div className="flexStart contactModes">
            {/* Call mode */}
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

            {/* Chat mode */}
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

            {/* Video Call mode */}
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

            {/* Message mode */}
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

        {/* Right side */}
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
