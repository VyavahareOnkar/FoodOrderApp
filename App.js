import React from "react";
import ReactDOM from "react-dom/client";

/*
-<AppLayout>
    -<Header>
        -logo
        -navbar
        -image
    <Header/>
    -<body>
        -Search & button
        -restaurantCards
            -<Cards/>
     <body/>
    -<Footer>
        -copyright
        -contact us
        -links
     <Footer/>
<AppLayout/>
*/

const Heading = () => {
  return (
    <div className="heading">
      <div className="header">
        <div className="logo-container">
          <img
            alt="logo"
            src="https://imgs.search.brave.com/cuV6UDpuLdZvtYCjXGpecNh3KBztj3dwGweV5zOFun8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzMzLzAyLzUz/LzM2MF9GXzExMzMw/MjUzMjBfck9qNzBo/NDd1UkNhd3Q2aVVM/TllrU0hWWTVjdmZS/NHouanBn"
          />
        </div>
        <div className="navbar">
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>
      <div className="msg">
        <h1>
          Eat, Sleep, <span>REPEAT!</span>
        </h1>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="Restaurants">
      <div className="card">
        <img alt="Pizza hut" src={props.img} />
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
        <p>{props.timing}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

const Searchbar = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Restaurants"
        className="searchbar"
      />
      <button className="btn">Search</button>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <Searchbar />
      <div className="cardbox">
        <RestaurantCard
          name="Pizza Hut"
          rating="4.3 stars"
          timing="25-30mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4b7ec5b5-3c99-4e56-8f99-8797ebee7a20_421568.JPG"
        />
        <RestaurantCard
          name="KFC"
          rating="4.3 stars"
          timing="220-25mins"
          location="Solapur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d60f4388-dc67-4a94-a186-b4631d5819c4_655335.JPG"
        />
        <RestaurantCard
          name="Kwality Walls"
          rating="4.6 stars"
          timing="15-20mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/8a805aa7-6029-4b58-814b-b0be873af3dd_391523.JPG"
        />
        <RestaurantCard
          name="Natural Ice Cream"
          rating="4.7 stars"
          timing="15-20mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/63d48a59-05a1-4843-81a9-b016ecbe24d9_171106.jpg"
        />
        <RestaurantCard
          name="McDonald's"
          rating="4.4 stars"
          timing="25-30mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/c61735c1-9763-4e9b-81f8-b9010e0a85c3_140896.JPG"
        />
        <RestaurantCard
          name="laziz Pizza"
          rating="4.2 stars"
          timing="30-35 mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7df476bbbb064ae03e0a2f75c1751a61"
        />
        <RestaurantCard
          name="Singapore Chinese"
          rating="3.9 stars"
          timing="20-25mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eqgvolooogvdw4avjuly"
        />
        <RestaurantCard
          name="Hotel Ismail"
          rating="4.3 stars"
          timing="20-25 mins"
          location="Pandharpur"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dcgvcsdm4lheza4gwliu"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h3>copyright @ all rights reserved</h3>
      <h3> Contact us</h3>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
        <li>link4</li>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Heading />,
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
