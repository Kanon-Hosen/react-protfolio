import React from 'react';
import { useEffect } from 'react';
import './Hero.css'
const Hero = () => {
    useEffect(() => {
        window.addEventListener("scroll",()=> {
            const herotext = document.querySelector(".heroText h1");
            const heroimg = document.querySelector(".heroImg img");

            const ofsetY = window.scrollY;

            herotext.style.transform = `translateY(${ofsetY * 0.3}px)`
            heroimg.style.transform = `translate(${ofsetY * 0.4}px, ${ofsetY * 0.6}px)`
        })
    },[])
    return (
        <div className='hero'>
            <div className="heroText">
                <h1>Hi</h1>
            </div>
            <div className="heroImg">
                <img src="https://raw.githubusercontent.com/safak/youtube2022/dev-portfolio/img/person.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;