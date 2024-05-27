import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  window.onscroll = function () {
    myFunction();
  };
  var header = document.getElementById("myHeader");
  var sticky = header?.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  }
  return (
    <section className="header shadow-out" id="myHeader">
      <div className="main-logo">Food Logo</div>
      <div className="menu-header">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/orders">
          <button>Orders</button>
        </NavLink>
        <NavLink to="/cart">
          <button>Cart</button>
        </NavLink>
        <NavLink to="/help">
          <button>Help</button>
        </NavLink>
      </div>
      <div className="authentication">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Signup</button>
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
