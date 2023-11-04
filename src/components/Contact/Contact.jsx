import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import {ContactMode} from './ContactMode.jsx';

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
                <ContactMode icon={<MdCall size={25} />} primaryText="Call" secondaryText="+250 780 608 133" buttonText="Call Now" />
              </div>
  
              {/* Chat mode */}
              <div className="flexcolstart row">
                <ContactMode icon={<BsFillChatDotsFill size={25} />} primaryText="Chat" secondaryText="+250 780 608 133" buttonText="Chat Now" />
              </div>
  
              {/* Video Call mode */}
              <div className="flexcolstart row">
                <ContactMode icon={<BsFillChatDotsFill size={25} />} primaryText="Video Call" secondaryText="+250 780 608 133" buttonText="Video Call Now" />
              </div>
  
              {/* Message mode */}
              <div className="flexcolstart row">
                <ContactMode icon={<HiChatBubbleBottomCenter size={25} />} primaryText="Message" secondaryText="+250 780 608 133" buttonText="Message Now" />
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
  