import React from "react";
import "./styles/style.css";
import image from "../../images/note-thanun-764qzzLAqs0-unsplash.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="sub-heading"> 關於我們</h3>
      <h1 className="heading">為何該選擇我們</h1>

      <div className="row">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>在新莊最好吃的食物</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illo laboriosam quisquam ea, repellat animi quod earum incidunt!
            Itaque, provident!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            natus?
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-shipping-fast"></i>
              <span>免運</span>
            </div>
            <div className="icons">
              <i className="fas fa-dollar-sign"></i>
              <span>輕鬆付款</span>
            </div>
            <div className="icons">
              <i className="fas fa-headset"></i>
              <span>24/7 服務</span>
            </div>
          </div>
          <a href="" className="btn">
            閱讀更多
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
