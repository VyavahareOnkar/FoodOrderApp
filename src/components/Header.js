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
      <div className="flex justify-between items-center bg-amber-500">
        <div className="w-20">
          <img alt="logo" className="rounded-full" src={LOGO_URL} />
        </div>
        <div className="flex text-white ">
          <ul className="flex m-4 p-4">
            <li className="m-2 p-2">Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="m-2 p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2 p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="m-2 p-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="m-2 p-2">
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
      <div className="msg min-h-80 bg-amber-500">
        <h1 className="text-center text-3xl text-white">
          Eat, Sleep, <span>REPEAT!</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
