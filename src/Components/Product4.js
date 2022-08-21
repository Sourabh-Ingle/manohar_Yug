import React from 'react'

const Product4 = ({product,title}) => {
  return (
    <div className='product4 container'>
        <h2>{title}</h2>

        <div className="productno4">
            {
                product.map(items=>{
                    const {id,img,title} = items;
                    return(
                        <div className="mainproduct4" key={id}>
                            <img src={img} alt={title} className='product4img' />
                            <h4 className='hidingText'>{title}</h4>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default Product4;