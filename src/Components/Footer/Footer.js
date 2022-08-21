import React from 'react';
import { SocialMedia,data1,data2,data3,data4 } from './MainData';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaTree } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import Footerlink from './Footerlink';

const Footer = () => {
  return (
    <div className='Footer container'>

      {/* ====main footer==== */}
      <div className="mainFooter">

        <div className="mainFooter1">

          <div className="mainFooter1101">

            <h2 className='logo1 my-bottom'><GiTreeBranch />Manohar Yug</h2>
            <h2 className='logo2 my-bottom'><FaTree />FitMaan</h2>
            <h3 className="mobile my-bottom">+91-7030703330</h3>
            <p className="mainFooter1101_para my-bottom">We are an organization on a mission to revolutionize the agriculture sector, which is the backbone of India’s economy.</p>

            <div className="socialMediaIcon my-bottom">
              {SocialMedia.map(items => {
                return (<div className='socialIcons' key={items.id}>
                  <a href="#">{items.img}</a>
                </div>
                )
              })
            } 
            </div>

          </div>


          <div className="mainFooter2202">
             <Footerlink title='QUICK LINK' data={data1}  />

             <Footerlink title='OUR SERVICES' data={data2}  />

             <Footerlink title='JOIN US' data={data3}  />

             <Footerlink title='POLICY' data={data4}  />

          </div>

        </div>


      </div>


      {/* ====second footer===== */}
      <div className="simpleFooter">

        <div className="simpleFooter1">
          <h6>Copyright © 2022 Manohar Yug. All Rights Reserved.</h6>
        </div>

        <div className="simplefooter2">
          <FaCcVisa /> <FaCcDiscover /> <FaCcMastercard />
        </div>

      </div>
    </div>
  )
}

export default Footer;