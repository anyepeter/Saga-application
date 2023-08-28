import React, { useState, useId } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { Circle } from 'react-preloaders';


const PizzaDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state.product;
    const [submitting, setSubmitting] = useState(false);
    const [formState, setFormState] = useState({
        "input": `{ "orderId":  "${useId()}", "productId": "${product?.productId.S}", "quantity": "0" }`,
        "stateMachineArn": "arn:aws:states:us-east-2:633211861656:stateMachine:OrderProductsStateMachine"
    });
console.log(formState)
const handleChange = (e) => {
    const updatedInput = JSON.parse(formState.input);
    updatedInput[e.target.name] = e.target.value;
    
    setFormState({
        ...formState,
        input: JSON.stringify(updatedInput)
    });
}

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiEndpoint = 'https://8b8ps39dq3.execute-api.us-east-2.amazonaws.com/dev/postdata';
        setSubmitting(true);
         setTimeout(() => {
            axios.post(apiEndpoint, formState)
            .then(response => {
                console.log(response);
                setSubmitting(false);
                window.location.reload(navigate('/about'));
            })
            .catch(error => {
                console.error('Error submitting data:', error);
                setSubmitting(false);
            });
        }, 1000);
    }

    return ( <section className='detailSection'> 
         {submitting ? (
            <Circle color={'#1962e8'} bgColor={'#000000'} />
        ) : (
            <div className='details' key={product?.productId.S}>
                <img src='https://shorturl.at/cgKOX' alt={product?.name.S} />
                <h1 className='pizzName'>{product?.name.S}</h1>
                <p>Price: ${product?.price.S}</p>

                <form onSubmit={handleSubmit}>
                    <p className='input'>
                        <label htmlFor="quantity">Number of quantity </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            onChange={handleChange}
                            value={formState.input['quantity']}
                        />
                    </p>
                    <button className='submit' disabled={submitting} type="submit">
                        Order Now
                    </button>
                </form>
            </div>
        )}
        </section>
    );
}

export default PizzaDetail;
