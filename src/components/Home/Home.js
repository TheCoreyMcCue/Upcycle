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
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
          price="120"
          rating={4}
        />
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
          price="120"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
          price="120"
          rating={4}
        />
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://imgs.search.brave.com/vMVe7S1wzhqYOlazOXwj6X3LU3h_KSZrg58czco0G6U/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL09S/SUcvRkVELzhZWVIv/SFpJOUJOVlkvRkVE/OFlZUkhaSTlCTlZZ/LmpwZz9mcmFtZT0x"
          price="30"
          rating={3}
        />
      </div>

      <div className="home__row">
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
          price="120"
          rating={5}
        />
        <Listing
          title="Complete Element Deck with Spitfire Wheels"
          image="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
          price="120"
          rating={4}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home
