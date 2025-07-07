import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className="heading">
      <div className="header">
        <div className="logo-container">
          <img alt="logo" src={LOGO_URL} />
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

export default Header;
