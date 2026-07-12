
import { useState } from 'react';



const  ListProduct = () => {
  
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setprice] = useState('');






  //  Adding a new product
  const handleProduct = () => {

    if (productName.trim() !== '' && price.trim() !== '') {

      const newProduct = {
        id: Date.now(), // Unique identifier
        name: productName.trim(),
        price: parseFloat(price),
        quantity: 1,
      };
      
      // creating a new array
      setProducts([...products, newProduct]);
      setProductName('');
      setprice('');
    }
  };

  

  // Increasing quantity function
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };



  //  Decreasing quantity function
  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };



  //  Removing a product
  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };


  //    Total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  
  return (
    <div>
        <h1>Exercise 5</h1>
      <h2>Simple Shopping Cart</h2>
      <div>
        <h3>Add a Product</h3>
        <input
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(event) => setprice(event.target.value)}
          placeholder="Price"
        />
        <button onClick={handleProduct}>Add to Cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}

                <div>
                  Quantity:
                  <button onClick={() => decreaseQuantity(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default  ListProduct;


