import React from 'react'

const AdvanceMachine = ({ imgonly }) => {
    return (
        <div className='container' >
            <h2 className=" productTitle aboutTitle">Advance Agricultural Machinery</h2>
            <div className='container advanceMachine'>
                {imgonly.map(item => {
                    return (
                        <div className='imgof' key={item.id}>
                            <img src={item.img} alt="" />
                        </div>
                    )
                })}

            </div>
        </div >

    )
}

export default AdvanceMachine;