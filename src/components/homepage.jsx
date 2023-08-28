import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return <>
    <section className='logSection'>
        <div className='sectionContainer'>
        <Link to="/about" className='linkTitle'>Get Started</Link>
        </div>
    </section>
    </>;
}


export default Homepage;