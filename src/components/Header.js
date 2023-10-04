import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const ref = useRef(null);

  const handleClick = (e) => {
    e.target.classList.toggle("fa-times");
    ref.current.classList.toggle("active");
  };

  return (
    <header>
      <Link to="#" className="logo">
        <i class="fa-solid fa-utensils"></i>Resto.
      </Link>
      <nav className="navbar" ref={ref}>
        <Link className="active" to="#home">
          首頁
        </Link>
        <Link to="#dishes">菜餚</Link>
        <Link to="#about">關於我們</Link>
        <Link to="#menu">菜餐</Link>
        <Link to="#review">評論</Link>
        <Link to="#order">點餐</Link>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars" onClick={handleClick}></i>
        <i className="fas fa-search" id="search-icon"></i>
        <Link to="#" className="fas fa-heart"></Link>
        <Link to="#" className="fas fa-shopping-cart"></Link>
      </div>
    </header>
  );
};

export default Header;
