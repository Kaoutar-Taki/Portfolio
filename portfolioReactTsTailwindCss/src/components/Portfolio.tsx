import React from "react";
import portfolio1 from "../img/portfolio1.jpg";
import portfolio2 from "../img/portfolio2.jpg";
import portfolio3 from "../img/portfolio3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const Portfolio: React.FC = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container swiper-container">
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
        >
          {/* Portfolio 1 */}
          <SwiperSlide>
            <div className="portfolio__content lg:gap-20 grid swiper-slide">
              <img
                src={portfolio1}
                alt="Modern Website"
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Modern Website</h3>
                <p className="portfolio__description">
                  A modern and responsive website designed to showcase my
                  skills.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Portfolio 2 */}
          <SwiperSlide>
            <div className="portfolio__content lg:gap-20 grid swiper-slide">
              <img
                src={portfolio2}
                alt="Brand Design"
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Brand Design</h3>
                <p className="portfolio__description">
                  A brand design project that showcases my branding skills.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Portfolio 3 */}
          <SwiperSlide>
            <div className="portfolio__content lg:gap-20 grid swiper-slide">
              <img
                src={portfolio3}
                alt="Online Store"
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Online Store</h3>
                <p className="portfolio__description">
                  An online store project that demonstrates my e-commerce
                  skills.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-next ">
          <i className="uil uil-angle-right-b swiper-portfolio-icon lg:text-[3.5rem]"></i>
        </div>
        <div className="swiper-button-prev lg:-left-14">
          <i className="uil uil-angle-left-b swiper-portfolio-icon lg:text-[3.5rem]"></i>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;

