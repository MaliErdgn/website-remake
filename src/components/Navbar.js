import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
        <ul>
          <Link to="/" style={{textDecoration: "none"}}>
            <li className="router">Home</li>
          </Link>
          {/* <Link style={{textDecoration: "none"}}>
            <li className="router">Back</li>
          </Link> */}
        </ul>
    </>
  );
}

export default Navbar;
