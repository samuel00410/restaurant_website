import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Header.css";

const Header = () => {
  const ref = useRef(null);
  const formRef = useRef(null);

  const handleClick = (e) => {
    e.target.classList.toggle("fa-times");
    ref.current.classList.toggle("active");
  };

  const handleSearch = (e) => {
    formRef.current.classList.toggle("active");
  };

  const handleExit = (e) => {
    formRef.current.classList.remove("active");
  };

  return (
    <>
      <header>
        <Link to="#" className="logo">
          <i className="fa-solid fa-utensils"></i>Resto.
        </Link>
        <nav className="navbar" ref={ref}>
          <Link className="active" smooth to="#home">
            首頁
          </Link>
          <Link smooth to="#dishes">
            菜餚
          </Link>
          <Link smooth to="#about">
            關於我們
          </Link>
          <Link smooth to="#menu">
            菜餐
          </Link>
          <Link smooth to="#review">
            評論
          </Link>
          <Link smooth to="#order">
            點餐
          </Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars" onClick={handleClick}></i>
          <i
            className="fas fa-search"
            id="search-icon"
            onClick={handleSearch}
          ></i>
          <Link to="#" className="fas fa-heart"></Link>
          <Link to="#" className="fas fa-shopping-cart"></Link>
        </div>
      </header>

      <form action="" id="search-form" ref={formRef}>
        <input
          type="search"
          name=""
          id="search-box"
          placeholder="輸入您想搜尋..."
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" onClick={handleExit}></i>
      </form>
    </>
  );
};

export default Header;
