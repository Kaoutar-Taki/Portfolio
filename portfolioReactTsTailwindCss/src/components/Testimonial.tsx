import React from "react";
import testimonial1 from "../img/testimonial1.jpg";
import testimonial2 from "../img/testimonial2.jpg";
import testimonial3 from "../img/testimonial3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Testimonial: React.FC = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>
      <div className="testimonial__container container swiper-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="swiper-wrapper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src={testimonial1}
                  alt="Client"
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">John Doe</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>
            <p className="testimonial__description">
              I've worked with John on several projects, and he has always
              exceeded my expectations. His creativity, attention to detail, and
              communication are unparalleled. I highly recommend him!
            </p>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src={testimonial2}
                  alt="Client"
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Jane Smith</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>
            <p className="testimonial__description">
              I've worked with John on several projects, and he has always
              exceeded my expectations. His creativity, attention to detail, and
              communication are unparalleled. I highly recommend him!
            </p>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src={testimonial3}
                  alt="Client"
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Oussama Tailaba</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>
            <p className="testimonial__description">
              I've worked with John on several projects, and he has always
              exceeded my expectations. His creativity, attention to detail, and
              communication are unparalleled. I highly recommend him!
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

