import React from 'react';
import './Home.css';
import Listing from '../Listing/Listing';


const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt=""
        />
      </div>
      {/* <div className="listings__container"> */}
        <div className="home__row">
          <Listing />
          <Listing />
        </div>

        <div className="home__row">
          <Listing />
          <Listing />
        </div>

        <div className="home__row">
          <Listing />
          <Listing />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Home
