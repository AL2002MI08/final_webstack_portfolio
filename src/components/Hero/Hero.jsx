import React from 'react'
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-bg"/>
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: "spring",
                        }}>
                            M & A'S <br/> Real Estate <br/> Agency
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                    <span className='secondaryText'>Purchase your dream home</span>
                    <span className='secondaryText'>Explore the taste of comfy and luxurious villas</span>
                    </div>
                   <div className="flexCenter search-bar">
                   <HiLocationMarker color="violet" size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                   </div>
                   <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={400} end={690} duration={3.5}/>
                        </span>
                        <span>+</span>
                        <span className='secondaryText'>Special Offers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                           <CountUp start={50} end={100} duration={3.5}/>
                        </span>
                        <span>+</span>
                        <span className='secondaryText'>Properties</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={55}/>
                        </span>
                        <span>+</span>
                        <span className='secondaryText'>Our ratings</span>
                    </div>
                   </div>
                </div>
                 {/* right */}
                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x: "6rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring",
                    }}
                    className="image-container">
                    <img src="./backg.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;