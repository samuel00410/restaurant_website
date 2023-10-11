import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="box-container">
        <div className="box">
          <h3>地區</h3>
          <a href="#">india</a>
          <a href="#">japan</a>
          <a href="#">russia</a>
          <a href="#">USA</a>
          <a href="#">france</a>
        </div>
        <div className="box">
          <h3>快速連結</h3>
          <a href="#home">首頁</a>
          <a href="#dishes">菜餚</a>
          <a href="#about">關於我們</a>
          <a href="#menu">菜單</a>
          <a href="#review">評論</a>
          <a href="#order">點餐</a>
        </div>
        <div className="box">
          <h3>聯絡資訊</h3>
          <a href="#">0939-318-488</a>
          <a href="#">samuel00410@gmail.com</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
          <a href="#">Line</a>
        </div>
      </div>

      <div className="credit">
        copyright @ 2023 by <span>Samuel Lin</span>
      </div>
    </section>
  );
};

export default Footer;
