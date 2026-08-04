import React , {useContext} from 'react';

import CartContext from './CartContext16';


const CartSummery = () => {

    const {itemCart , removeCart} = useContext(CartContext)

  return (
    <div>

        <h2>Cart Summary</h2>
        <p>Total item : {itemCart.length}</p>

        <ul>
            {
                itemCart.map((item)=> (
                    <li key={item.id}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeCart(item.id)}>remove</button>
                    </li>
                )) 
            }
        </ul>
    </div>
  )
}

export default CartSummery