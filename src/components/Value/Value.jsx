import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
const Value = () => {
  return (
     <section className="v-wrapper">
          <div className="paddings innerwidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
          </div>
          {/* right side */}
          <div className="flexColstart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
                We always ready to help by providing the best services for you.
                <br />
                We beleive a good blace to live can make your life better
                </span>   
             </div>
          </div>
      </section>
  )
}

export default Value