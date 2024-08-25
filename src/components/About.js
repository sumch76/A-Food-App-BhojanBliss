import React from 'react';

const About = () => {
  return (
    <div className='about-card'>
    <div  className="card-hover">
      <div className="card-hover__content">
        <h3 className="card-hover__title">
          Abhi karee <span>Bhojan</span> right now!
        </h3>
        <p className="card-hover__text">Bhojan Bliss delivers food  to your doorstep, operating seamlessly across all locations. Enjoy the rich flavors  with our convenient food delivery service</p>
        <a href="https://github.com/sumch76" target='_blank' className="card-hover__link">
          <span> My Github </span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <div className="card-hover__extra">
        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
      </div>
      <img src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    </div>
    </div>
  );
}

export default About;
