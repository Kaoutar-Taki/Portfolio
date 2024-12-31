import React from "react";
import testimonial1 from "../img/testimonial1.jpg";
import testimonial2 from "../img/testimonial2.jpg";
import testimonial3 from "../img/testimonial3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial section md:py-[6rem] md:pb-[2rem]">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle md:mb-16">My client saying</span>
      <div className="testimonial__container container md:mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
          }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide className="testimonial__content">
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
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className="uil uil-star testimonial__icon-star"
                  ></i>
                ))}
              </div>
            </div>
            <p className="testimonial__description">
              I've worked with John on several projects, and he has always
              exceeded my expectations. His creativity, attention to detail, and
              communication are unparalleled. I highly recommend him!
            </p>
          </SwiperSlide>

          {/* Additional Testimonials */}
          {[testimonial2, testimonial3].map((imgSrc, index) => (
            <SwiperSlide key={index} className="testimonial__content">
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img src={imgSrc} alt="Client" className="testimonial__img" />
                  <div>
                    <h3 className="testimonial__name">Client {index + 2}</h3>
                    <span className="testimonial__client">Client</span>
                  </div>
                </div>
                <div>
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className="uil uil-star testimonial__icon-star"
                    ></i>
                  ))}
                </div>
              </div>
              <p className="testimonial__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sit amet libero eget justo facilisis pellentesque.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

