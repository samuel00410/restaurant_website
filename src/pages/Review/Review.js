import React, { useRef, useState } from "react";
import img1 from "../../images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import img2 from "../../images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg";
import img3 from "../../images/christian-buehner-DItYlc26zVI-unsplash.jpg";
import img4 from "../../images/harps-joseph-tAvpDE7fXgY-unsplash.jpg";
import img5 from "../../images/vince-veras-AJIqZDAUD7A-unsplash.jpg";

import "./styles/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Review = () => {
  return (
    <section className="review" id="review">
      <h3 className="sub-heading"> 評論 </h3>
      <h1 className="heading"> 網友評價 </h1>

      <div className="review-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          // centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={img1} alt="" />
                <div className="user-info">
                  <h3>John Deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem cum ipsam omnis rem nisi! Nam dolore sint accusantium
                iusto tempora!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={img2} alt="" />
                <div className="user-info">
                  <h3>Ben Den</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem cum ipsam omnis rem nisi! Nam dolore sint accusantium
                iusto tempora!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={img3} alt="" />
                <div className="user-info">
                  <h3>christian Bruce</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem cum ipsam omnis rem nisi! Nam dolore sint accusantium
                iusto tempora!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={img4} alt="" />
                <div className="user-info">
                  <h3>Harps Josph</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem cum ipsam omnis rem nisi! Nam dolore sint accusantium
                iusto tempora!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={img5} alt="" />
                <div className="user-info">
                  <h3>Vince Veras</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem cum ipsam omnis rem nisi! Nam dolore sint accusantium
                iusto tempora!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
