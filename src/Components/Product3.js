import React from 'react'
import { singleP } from './Data'

const Product3 = ({ product }) => {
    return (
        <div className='product container' >
            <h2 className="productTitle aboutTitle">Trending Technologies</h2>

            <div className="product3main">
                <div className="singleProduct">
                    {singleP.map(items => {
                        const { id, img, title, star,review} = items;
                        return (
                            <div key={id}>
                                <div className=" productimg3" >
                                    <img src={img} alt={title} />
                                </div>
                                <h4>{title}</h4>
                                <div className="star"><span>{star}{star}{star}{star}{star}</span> {review}</div>

                            </div>
                        )
                    })}

                </div>

                <div className="mainProduct product3">
                    {product.map(items => {
                        const { id, img, title, star,review } = items;
                        return (
                            <div key={id}>
                                <div className="productImg product-3" >
                                    <img src={img} alt={title} />
                                </div>
                                <h4>{title}</h4>
                                <div className="star"><span>{star}{star}{star}{star}{star}</span> {review} </div>



                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product3;