import React from 'react';


const Onlyimg = ({ onlyimg }) => {
    return (
        <div className='container onlyimg'>
            {onlyimg.map(item => {
                return (
                    <div className='imgonly' key={item.id}>
                        <img src={item.img} alt="" />
                    </div>
                )
            })}

        </div>
    )
}

export default Onlyimg;
