import React, {useContext}from 'react'
import CartContext from './CartContext16'

const ProductItem16 = ({itemId , itemName , price}) => {

    const {addCart} = useContext(CartContext);

    const handleAdd = () => {

        addCart({id:itemId, name: itemName , price});
    }

  return (
    <div>
        <p>{itemName}</p>
        <p>Price : ${price}</p>
        <button onClick={handleAdd}>Add To Cart</button>

    </div>
  )
}

export default ProductItem16;