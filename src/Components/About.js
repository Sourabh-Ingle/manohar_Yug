import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { joinfor } from "./Data";
import Aboutimg from './../img/adrian-infernus-BN6iQEVN0ZQ-unsplash.jpg'





const About = () => {
    return (
        <>
            <div className='container About' id='about'>
                <div className="aboutImg">
                    <img src={Aboutimg} alt="" />
                </div>

                <div className="aboutText">
                    <h2 className="aboutTitle">About <sapn className='diffentColor'>Manohar Yug</sapn></h2>

                    <p className="aboutPara">Manohar Yug as the name suggests is a mission to regain the glorious past and bring back the Manohar age of the "Golden Sparrow" i.e. India and its Agricultural Prosperity.</p>
                    <p className="aboutPara">Manohar Yug is a brand coined by Fitmaan Technologies Pvt. Ltd, incorporated with an aim to revolutionize the agriculture sector, which is the backbone of India's economy. Our aim is to provide the farmers, financial safety & stability through flexible farming and lending solutions. This will enable Indian farmers to keep their land and livelihood safe amid unpredictable times.</p>
                    <p className="aboutPara">It's an integrated platform that brings the technology advancements like augmented reality, mixed reality and IoT along with easy access of expert mentors</p>

                    <button className="btn aboutButton">Read more  <FaArrowRight /></button>

                </div>


            </div>
            <div className="joinfor container">
                <h2 className="aboutTitle joinfor">INTERESTED TO <span className='diffentColor'> JOIN FOR?</span></h2>
                <div className="joinfor-subcontainer">
                    {joinfor.map(item => {
                        const { Id, img, title } = item;
                        return (
                            <div className="imgJoin" key={Id}>
                                <img src={img} alt={title} />
                                <h4>{title}</h4>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default About;