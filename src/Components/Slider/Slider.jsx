import React, { useState, useEffect } from 'react';
import './Slider.css';
import data from './SliderData';

const Slider = () => {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let lasatIndex = people.length - 1;

        if (index < 0) {
            setIndex(lasatIndex);
        }
        if (index > lasatIndex) {
            setIndex(0);
        }

    }, [index, people])

    useEffect(()=>{

       let slid= setInterval(()=>{
           setIndex(index+1);
        },3000);
        return()=>clearInterval(slid);
    },[index])


    return (
        <section >

            <div className="main-container">
                <div className="detail-Article">
                    {
                        people.map((person, personIndex) => {
                            const { id, img } = person;

                            let position = 'article-class nextSlide';

                            if (index === personIndex) {
                                position = 'article-class activeSlide';
                            }

                            if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                                position = 'article-class lastSlide';
                            }
                            return <article key={id} className={position} >
                                <img src={img} alt='' className='person-img my' />

                            </article>
                        })
                    }
                </div>
                <div className="btncenter">
                    <button className="pre common-btn" onClick={() => setIndex(index - 1)} >-</button>
                    <button className="next common-btn" onClick={() => setIndex(index - 1)} >+</button>
                </div>
            </div>
        </section>
    )
}

export default Slider;