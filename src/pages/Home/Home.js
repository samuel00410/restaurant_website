import React from "react";
import Dishes from "../Dishes/Dishes";
import About from "../About/About";
import { Swiper, SwiperSlide } from "swiper/react";
import noodles from "../../images/zoshua-colah-20c49Lo5IcY-unsplash-removebg-preview.png";
import friedchicken from "../../images/leo-roza-zNqArwc7Hh4-unsplash-removebg-preview.png";
import pizza from "../../images/fernando-andrade-_P76trHTWDE-unsplash-removebg-preview.png";
import "./styles/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-slider">
          <div className="wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="slide">
                <div className="content">
                  <span>我們的菜餚</span>
                  <h3>辣味湯麵</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, voluptatibus.
                  </p>
                  <a href="" className="btn">
                    馬上點餐
                  </a>
                </div>
                <div className="image">
                  <img src={noodles} alt="辣味湯麵" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <div className="content">
                  <span>我們的菜餚</span>
                  <h3>炸雞</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, voluptatibus.
                  </p>
                  <a href="" className="btn">
                    馬上點餐
                  </a>
                </div>
                <div className="image">
                  <img src={friedchicken} alt="炸雞" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <div className="content">
                  <span>我們的菜餚</span>
                  <h3>披薩</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, voluptatibus.
                  </p>
                  <a href="" className="btn">
                    馬上點餐
                  </a>
                </div>
                <div className="image">
                  <img src={pizza} alt="披薩" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Dishes />
      <About />
    </>
  );
};

export default Home;
