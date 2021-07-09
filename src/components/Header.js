import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(false);

  const responsiveNav = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <h1>Beyond 8</h1>
          </Link>
        </div>
        <div className={value ? "nav-res" : "nav-right"}>
          <Link to="#">Log In</Link>
          <Link to="#" className="signup">
            Sign Up For Free
          </Link>
        </div>
        <div className="burger" onClick={responsiveNav}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
