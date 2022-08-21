import React from 'react';





const Product = ({product,title}) => {
// <span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
    return (
        <div className='product container' >
            <h2 className="productTitle aboutTitle">{title}</h2>
            <div className="mainProduct">
                {product.map(items => {
                    const { id, img, title, cost,review ,oldcost ,faimg,star,rupee } = items;
                    return (
                        <div key={id}>
                            <div className="productImg" >
                                <img src={img} alt={title} />
                            </div>
                            <h4>{title}</h4>
                            <div className="star"><span>{star}{star}{star}{star}{star}</span> {review}</div>
                            <h3>{rupee}<span>{cost}</span> <del className='oldCost'>{faimg}{oldcost} 
                            </del></h3>

                        </div>)
                })}
            </div>
        </div>
    )
}

export default Product;