import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './About.css';
import data from '../../utils/accordion';

const About = () => {
    const [classNames, setClassNames] = useState(data.map(() => 'collapsed'));

    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left about */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./about.png" alt="" />
                    </div>
                </div>
                {/* right about */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>About Us</span>
                    <span className='primaryText'>Services We Offer</span>
                    <span className='secondaryText'>
                        We facilitate your search for your dream home
                        <br/>
                        Within your budget live in one of the best luxury homes.
                    </span>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => (
                            <AccordionItem
                                className={`accordionItem ${classNames[i]}`} key={i} uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default About;
