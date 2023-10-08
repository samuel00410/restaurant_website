import React from "react";
import "./styles/style.css";
import pizza1 from "../../images/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg";
import pizza2 from "../../images/fernando-andrade-_P76trHTWDE-unsplash.jpg";
import pizza3 from "../../images/foad-roshan-Y6OgisiGBjM-unsplash.jpg";

const Dishes = () => {
  return (
    <section className="dishes" id="dishes">
      <h3 className="sub-heading"> 我們的菜餚</h3>
      <h1 className="heading">最受歡迎的菜餚</h1>
      <div className="box-container">
        <div className="box">
          <img src={pizza1} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
        <div className="box">
          <img src={pizza2} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
        <div className="box">
          <img src={pizza3} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
        <div className="box">
          <img src={pizza1} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
        <div className="box">
          <img src={pizza2} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
        <div className="box">
          <img src={pizza3} alt="" />
          <a href="#" class="fa-solid fa-heart"></a>
          <a href="#" class="fa-solid fa-eye"></a>
          <h3>很好吃</h3>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span>$15.99</span>
          <a href="" className="btn">
            加入購物車
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
