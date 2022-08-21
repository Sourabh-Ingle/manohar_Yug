import { React, useState } from 'react';
import { VscMail } from "react-icons/vsc";
import { FaHeadset, FaRegUser, FaBars, FaTimes, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";


const NavBar = () => {

    const [user, setUser] = useState(false);
    const [register, setRegister] = useState(false);
    const [toggleBar, setToggleBar] = useState(false);
    const [arraw, setArraw] = useState(false);
    const[services,setServices]=useState(false);
    const[member,setMember]=useState(false);
    const[catagory,setCatagory]=useState(false);

    const arrawSelector = () => {
        setArraw(!arraw);
    }

    const navToggle = () => {
        setToggleBar(!toggleBar);
    }

    const toggle = () => {
        setUser(!user);
    }

    const RegisterToggle = () => {
        setRegister(!register);
    }


    return (
        <div className='Navbar'>

            <div className="Navbar001">

                <div className="Navbar001_left">
                    <a href="#" className='Navbar001_left001' >
                        <VscMail className='mx-1' /><span>fitmaaninfo@manoharyug.com</span>
                    </a>
                    <a href="#" className='Navbar001_left002' >
                        <FaHeadset className='mx-1' /><span>(+91) 70307 03330</span>
                    </a>
                </div>

                <div className="Navbar001_right">
                    <div className="signUp" onClick={toggle}>
                        <FaRegUser /> SignUp |
                    </div>

                    {user && <div className='userSignup'>
                        <button onClick={toggle}>close</button>
                    </div>}



                    <div className="register" onClick={RegisterToggle}> Register</div>

                    {register && <div className='registerSignup'>
                        <button onClick={RegisterToggle}>close</button>
                    </div>}
                </div>
            </div>

            <div className="secondnav container">
                <div className="secondnav_left">
                    <div className="secondivIcon" onClick={navToggle}><FaBars /></div>
                    <h3 className='my-bottom secondivLogo logo1'><GiTreeBranch />Manohar Yug</h3>
                </div>

                {
                    toggleBar && <div className="secondnavHide">
                        <span className='closeNav' onClick={navToggle}><FaTimes /></span>

                        <ul className='mainMenuLinklist'>
                            <li><a href="">HOME</a></li>
                            <span className='aboutuslist' onClick={arrawSelector}>About Us {!arraw ? <FaAngleRight /> : <FaAngleUp />} </span>
                            {arraw && <ul className="mx-left" >
                                <li><a href="">Why Us</a></li>
                                <li><a href="">Our Team</a></li>
                                <li><a href="">What we offers</a></li>
                            </ul>}

                            <span className='aboutuslist' onClick={()=>(setCatagory(!catagory))}>Catagory {!catagory ? <FaAngleRight /> : <FaAngleUp />} </span>

                            {catagory && <ul className="mx-left">
                                <li><a href="">Solar</a></li>
                                <li><a href="">Drones</a></li>
                                <li><a href="">Electrical Vehical</a></li>
                            </ul>}

                            <span className='aboutuslist' onClick={()=>(setServices(!services))}>Services {!services ? <FaAngleRight /> : <FaAngleUp />} </span>

                            {services && <ul className="mx-left">
                                <li><a href="">Service Module</a></li>
                                <li><a href="">Technology Consulting</a></li>
                                <li><a href="">Finance Consulting</a></li>
                                <li><a href="">Business Consulting</a></li>
                            </ul>}


                            <span className='aboutuslist' onClick={()=>(setMember(!member))}>Members {!member ? <FaAngleRight /> : <FaAngleUp />} </span>

                            {member && <ul className="mx-left">
                                <li><a href="">Distributor</a></li>
                                <li><a href="">Franchise</a></li>
                                <li><a href="">Seller</a></li>
                            </ul>}

                            <li><a href="">Contact </a></li>
                            
                        </ul>

                    </div>
                }
            </div>

        </div>
    )
}

export default NavBar;