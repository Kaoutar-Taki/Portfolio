import React from "react";
import portfolio1 from "../img/portfolio1.jpg";
import portfolio2 from "../img/portfolio2.jpg";
import portfolio3 from "../img/portfolio3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: portfolio1,
      title: "Modern Website",
      description:
        "A modern and responsive website designed to showcase my skills.",
      demoLink: "#",
    },
    {
      id: 2,
      imgSrc: portfolio2,
      title: "Brand Design",
      description: "A brand design project that showcases my branding skills.",
      demoLink: "#",
    },
    {
      id: 3,
      imgSrc: portfolio3,
      title: "Online Store",
      description:
        "An online store project that demonstrates my e-commerce skills.",
      demoLink: "#",
    },
  ];

  return (
    <section
      className="portfolio section md:py-[6rem] md:pb-[2rem]"
      id="portfolio"
    >
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle md:mb-16">Most recent work</span>

      <div className="portfolio__container container md:mx-auto">
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
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="portfolio__content lg:gap-20 grid">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="portfolio__img"
                  loading="lazy"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">{item.title}</h3>
                  <p className="portfolio__description">{item.description}</p>
                  <a
                    href={item.demoLink}
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-next">
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

