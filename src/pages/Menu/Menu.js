import React from "react";
import "./styles/style.css";
import cake1 from "../../images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg";
import cake2 from "../../images/aneta-voborilova-1pJgja8u0S8-unsplash.jpg";
import cake3 from "../../images/heather-barnes-_TN1m5R1pFI-unsplash.jpg";
import cake4 from "../../images/jenny-galloway-MreIoITtSBA-unsplash.jpg";
import cake5 from "../../images/micheile-henderson-MYAGZpr2cik-unsplash.jpg";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h3 className="sub-heading"> 我們的菜單 </h3>
      <h1 className="heading">今日特餐</h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={cake1} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>推薦餐點</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              molestiae, natus repellat cum asperiores mollitia.
            </p>
            <a href="#" className="btn">
              加入購物車
            </a>
            <span className="price"> $12.99 </span>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={cake2} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>推薦餐點</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              molestiae, natus repellat cum asperiores mollitia.
            </p>
            <a href="#" className="btn">
              加入購物車
            </a>
            <span className="price"> $12.99 </span>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={cake3} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>推薦餐點</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              molestiae, natus repellat cum asperiores mollitia.
            </p>
            <a href="#" className="btn">
              加入購物車
            </a>
            <span className="price"> $12.99 </span>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={cake4} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>推薦餐點</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              molestiae, natus repellat cum asperiores mollitia.
            </p>
            <a href="#" className="btn">
              加入購物車
            </a>
            <span className="price"> $12.99 </span>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={cake5} alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>推薦餐點</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              molestiae, natus repellat cum asperiores mollitia.
            </p>
            <a href="#" className="btn">
              加入購物車
            </a>
            <span className="price"> $12.99 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
