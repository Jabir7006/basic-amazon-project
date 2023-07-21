import React from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section id="header" className={styles.banner}>
      <nav className={`navbar navbar-expand-md ${styles.navbar}`}>
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" className={styles.logo} />
        </NavLink>

        <div
          className={`collapse navbar-collapse ${styles["navbar-collapse"]}`}
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles["navbar-nav"]}`}>
            <li className={`nav-item ${styles["nav-item"]}`}>
              <NavLink className={`nav-link ${styles["nav-link"]}`} aria-current="page" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className={`nav-item ${styles["nav-item"]}`}>
              <NavLink className={`nav-link ${styles["nav-link"]}`} aria-current="page" to="/review">
                Order Review
              </NavLink>
            </li>
            <li className={`nav-item ${styles["nav-item"]}`}>
              <NavLink className={`nav-link ${styles["nav-link"]}`} to="/inventory">
                Manage Inventory here
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles["search-style"]}>
          <input
            className={`w-75 ${styles["search-input"]}`}
            type="search"
            placeholder="Type here to search"
          />
          <NavLink to="/review">
            <i
              className={`fa fa-cart-shopping ${styles["cart-icon"]} ${styles["fa-cart-shopping"]}`}
            ></i>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Header;

