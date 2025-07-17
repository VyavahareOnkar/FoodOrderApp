import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [reactBtn, setreactBtn] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();

  console.log("rendering");
  return (
    <div className="heading">
      <div className="header">
        <div className="logo-container">
          <img alt="logo" src={LOGO_URL} />
        </div>
        <div className="navbar">
          <ul className="list">
            <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <button
              onClick={() => {
                reactBtn == "Login"
                  ? setreactBtn("Logout")
                  : setreactBtn("Login");
              }}
            >
              {reactBtn}
            </button>
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
