import React from 'react';

const Footerlink = ({ title, data }) => {
    return (
        <div className='footerLinks my-bottom'>
            <h4 className="linktitle">{title}</h4>
            <div className="linkl my-bottom">
                {
                    data.map(items => {
                        return (
                            <div className='listlinks' key={items.id}>
                                <li><a href={items.link}>{items.title}</a></li>
                            </div>)
                    })
                }
            </div>


        </div>
    )
}

export default Footerlink;