import React from 'react';
import './Project.css';
import Img from '../../images/website1.jpeg'
import { useEffect } from 'react';
const Project = () => {
    useEffect(() => {
        const text = document.querySelector(".projectText");
        const img = document.querySelector(".projectImg");
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            text.style.transform = `translateX(calc(500vh - ${offset}px))`
            img.style.transform = `translateX(calc(-500vh + ${offset}px))`
        })
    },[])
    return (
        <div className='project'>
            <div className="projectText">
                <h3>VoteX</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, accusamus inventore. Assumenda, eveniet asperiores beatae nesciunt ipsa iste quam odit reiciendis eos, perspiciatis repellat a corporis. Maxime consectetur exercitationem explicabo fuga atque praesentium, repudiandae harum id sit accusamus, quas animi.</p>
                <button className='button'>Load more</button>
            </div>
            <div className="projectImg">
                {/* <img src="https://raw.githubusercontent.com/safak/youtube2022/dev-portfolio/img/phone.png" alt="" /> */}
                <div className="img">
                    <img src={Img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Project;