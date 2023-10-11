import React, { useRef, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Header.css";

const Header = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [activeLink, setActiveLink] = useState("#home");

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

  // 使用 useEffect 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      // 取得各區段的元素及其距離視窗頂部的距離
      const offsets = [
        { id: "#home", offsetTop: document.getElementById("home").offsetTop },
        {
          id: "#dishes",
          offsetTop: document.getElementById("dishes").offsetTop,
        },
        { id: "#about", offsetTop: document.getElementById("about").offsetTop },
        { id: "#menu", offsetTop: document.getElementById("menu").offsetTop },
        {
          id: "#review",
          offsetTop: document.getElementById("review").offsetTop,
        },
        { id: "#order", offsetTop: document.getElementById("order").offsetTop },
      ];

      // 找出最接近頂部的區段
      const active = offsets.reduce((prev, curr) =>
        Math.abs(curr.offsetTop - window.scrollY) <
        Math.abs(prev.offsetTop - window.scrollY)
          ? curr
          : prev
      );

      // 更新 activeLink 狀態
      setActiveLink(active.id);
    };

    window.addEventListener("scroll", handleScroll);

    // 清除事件監聽
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Link to="#" className="logo">
          <i className="fa-solid fa-utensils"></i>Resto.
        </Link>
        <nav className="navbar" ref={ref}>
          <Link
            smooth
            to="#home"
            className={activeLink === "#home" ? "active" : ""}
          >
            首頁
          </Link>
          <Link
            smooth
            to="#dishes"
            className={activeLink === "#dishes" ? "active" : ""}
          >
            菜餚
          </Link>
          <Link
            smooth
            to="#about"
            className={activeLink === "#about" ? "active" : ""}
          >
            關於我們
          </Link>
          <Link
            smooth
            to="#menu"
            className={activeLink === "#menu" ? "active" : ""}
          >
            菜單
          </Link>
          <Link
            smooth
            to="#review"
            className={activeLink === "#review" ? "active" : ""}
          >
            評論
          </Link>
          <Link
            smooth
            to="#order"
            className={activeLink === "#order" ? "active" : ""}
          >
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
