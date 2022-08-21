import React from 'react';
import { VscMail } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";


export const ScrollText = () => {
    return (
        <div className='scrollingText'>
            <div className="dottedborder">
                <h2 className='mainScrollingText'>ONLINE E-PORTAL LAUNCHING COMMING SOON</h2>
            </div>



        </div>
    )
}

export const ScrollText1 = () => {
    return (
        <div className='scrollingText'>
            <div className="dottedborder dottedborder2">
                <h2 className='mainScrollingText'>PAY ONLY FOR POWER TO PROSPER
                </h2>
                <div className="scrollText1"><h1>FITMAAN TECHNOLOGIES!</h1></div>

            </div>
        </div>
    )
}

export const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="subOne flexCenter">
               <span><VscMail /></span>
               <h2> SUBSCRIBE TO OUR NEWSLETTER</h2>
            </div>

            <div className="subTwo flexCenter">
                <input type="text" placeholder='Your E-mail Address' />
                <button >SUBSCRIBE <FaArrowRight/></button>
            </div>

        </div>
    )
}