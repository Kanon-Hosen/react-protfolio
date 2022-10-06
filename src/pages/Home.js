import React from 'react';
import { useEffect } from 'react';
import FInd from '../components/Find/FInd';
import Card from '../components/Hero/Card/Card';
import Hero from '../components/Hero/Hero';
import Project from '../components/Projects/Project';
import './Home.css'
const Home = () => {
    const card1H2 = `I'm Kanon`;
    const card2H2 = `Web Developer`;
    const card3H2 = `Web Desginer`;
    const card4H2 = `Here are some of my projects`;
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const card1 = document.querySelector(".card1 h2")
            const card2 = document.querySelector(".card2")
            const card2H2 = document.querySelector(".card2 h2")
            const card3 = document.querySelector(".card3")
            const card3H2 = document.querySelector(".card3 h2")
            const card4 = document.querySelector(".card4 h2")
            const ofsetY = window.scrollY;
            card1.style.transform = `translateX(${ofsetY * 0.1}px)`;
            card2.style.backgroundPositionY =`${ofsetY * 0.5}px`;
            card3.style.backgroundPositionY =`${-ofsetY * 0.5}px`;
            card3H2.style.transform =`translateX(calc(-300vh + ${ofsetY}px))`;
            card2H2.style.transform =`translateX(calc(200vh - ${ofsetY}px))`;
            card4.style.transform = `translateY(calc(400vh - ${ofsetY}px))`;
        })
    },[])
    return (
        <div>
            <div className="hero">
            <Hero></Hero>
            </div>
            <div className="card1">
                <Card name={card1H2}></Card>
            </div>
            <div className="card2">
                <Card name ={card2H2}></Card>
            </div>
            <div className="card3">
                <Card name ={card3H2}></Card>
            </div>
            <div className="card4">
                <Card name ={card4H2}></Card>
            </div>
            <div className='project'>
                <Project></Project>
            </div>
            <FInd></FInd>
        </div>
    );
};

export default Home;