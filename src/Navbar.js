import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggle, setToggle] = useState(true);
  return (
    // <div className="navbar">
    //   <h1>Home Page</h1>
    //   <div class="dropdown">
    //     <button class="dropbtn">Dropdown</button>
    //     <div class="dropdown-content">
    //       <a href="#">Any Page</a>
    //       <hr />
    //       <a href="#">Second Level</a>
    //       <hr />

    //       <a href="#">Another Page</a>
    //     </div>
    //   </div>
    //   <h1>Mega Menu</h1>
    //   <h1>Any Page</h1>
    //   <h1>Right Dropdown</h1>
    // </div>

    <div className="menudropdown1">
      <ul className="nav">
        <center>
          <li>
            Home Page
            <ul>
              <li>New York</li>
            </ul>
          </li>
          <li>
            left dropdown
            <ul>
              <li>any page</li>
              <li>Second level</li>
              <li>Another page</li>
              <li>
                Last level
                <ul>
                  <li>Another page</li>
                  <li>Any page</li>
                  <li>
                    Third level
                    <ul>
                      <li>Another page</li>
                      <li>Any page</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Mega Menu</li>
          <li>Any page</li>
          <li>Right dropdown</li>
          {/* <li className="hamburger">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </li> */}
        </center>
      </ul>
      <ul className="nav2">
        <center>
          <li>
            <i
              class="fa fa-bars"
              aria-hidden="true"
              onClick={() => setShowLinks(!showLinks)}
            ></i>
          </li>
        </center>
      </ul>
    </div>
  );
};

export default Navbar;
