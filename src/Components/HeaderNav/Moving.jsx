import React, { useState } from 'react'
import { FaSistrix, FaList, FaCaretDown } from "react-icons/fa";

const Moving = () => {

  const [trigger, setTrigger] = useState(false);


  return (
    <div className='moving_component'>

      <div className="moving001 container">


        <div className="menuComponent" onClick={()=>(setTrigger(!trigger))}>
          <span><FaList /></span> Browser Catagory <span><FaCaretDown /></span>
        </div>
        {/* <div className="mennnu">
        { trigger && <ul className='menuComponentLinks'>
            <li><a href="">Organic Farming</a></li>
            <li><a href="">Seeds</a></li>
            <li><a href="">Equipments</a></li>
            <li><a href="">Fertilizer</a></li>
            <li><a href="">Irrigation</a></li>
            <li><a href="">Gardening</a></li>
            <li><a href="">Farm Products</a></li>
            <li><a href="">Crop Protection</a></li>
            <li><a href="">Electric Vehicals</a></li>
            <li><a href="">Drones</a></li>
          </ul> }
        </div> */}
        
        



        <div className="searchComponent">
          <input type="text" placeholder='Search' className='inputSearch' />
          <button className='btnSearch'><FaSistrix /></button>

        </div>
        <div className="tractComponrnt">

        </div>





      </div>








    </div>
  )
}

export default Moving;