import React from 'react';
import './Contact.css';
import { MdCall, BsFillChatDotsFill, HiChatBubbleBottomCenter } from 'react-icons/md'; 
import ContactMode from './ContactMode'; 

const modes = [
  { icon: <MdCall size={25} />, type: 'Call', number: '+250 780 608 133', action: 'Call Now' },
  { icon: <BsFillChatDotsFill size={25} />, type: 'Chat', number: '+250 780 608 133', action: 'Chat Now' },
  { icon: <BsFillChatDotsFill size={25} />, type: 'Video Call', number: '+250 780 608 133', action: 'Video Call Now' },
  { icon: <HiChatBubbleBottomCenter size={25} />, type: 'Message', number: '+250 780 608 133', action: 'Message Now' },
];

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColstart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We're always ready to help by providing the best services for you. We believe a good place to live can make your life better.
          </span>

          {/* Other mode */}
          {modes.map((mode, index) => (
            <ContactMode key={index} {...mode} />
          ))}
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
