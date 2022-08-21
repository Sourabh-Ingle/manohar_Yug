import React from 'react';

const Product2 = ({ product }) => {
    return (
        <div className='product container' >
            <h2 className="productTitle aboutTitle">Advance Farming Technology -Israel</h2>
            <div className="mainProduct">
                {product.map(items => {
                    const { id, img, title, star } = items;
                    return (
                        <div key={id}>
                            <div className="productImg product2" >
                                <img src={img} alt={title} />
                            </div>
                            <h4>{title}</h4>
                            <div className="star"><span>{star}{star}{star}{star}{star}</span>  </div>
                           


                        </div>)
                })}
            </div>
        </div>
    )
}

 
export default Product2;