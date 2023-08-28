import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const LandingPage = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('https://8b8ps39dq3.execute-api.us-east-2.amazonaws.com/dev/products')
        .then(response => setProducts(response.data.Items))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(products)
    console.log("howw")
    return (
      <section className='pizzaSection'>
        <div className='pizzaState'>
          <h1>Pizza Menu</h1>
          <div className='pizzaContainer'>
            {
              products?.filter((product) => product.productId.S).map(product => (
                <div className='pizzaSet' key={product.productId.S} onClick={() => navigate(`/pizza/${product.productId.S}`, { state: { product } })}>
                    <div className='imageContainer'><img className='imageSize' src={`${product.image.S}`} /></div>
                    <div className='pizzaDetails'>
                  <h2>{product.name.S}</h2>
                  <p>${product.price.S}</p>
                  </div>
                  <p className='number'>Quantity left: {product.quantity.S}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
}

export default LandingPage;
