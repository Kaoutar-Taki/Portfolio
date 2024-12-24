import React from "react";
import portfolio1 from "../img/portfolio1.jpg";
import portfolio2 from "../img/portfolio2.jpg";
import portfolio3 from "../img/portfolio3.jpg";
import project from "../img/project.png";
import testimonial1 from "../img/testimonial1.jpg";
import testimonial2 from "../img/testimonial2.jpg";
import testimonial3 from "../img/testimonial3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
const Main: React.FC = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />

      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className="qualification__button button--flex"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>
          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Baccalauréat en séries professionnelles.
                  </h3>
                  <span className="qualification__subtitle">
                    Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 2 ====================--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Technicien Spécialisé en Développement Digital.
                  </h3>
                  <span className="qualification__subtitle">
                    ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2023
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 3 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Programme de formation en développement digital.
                  </h3>
                  <span className="qualification__subtitle"> 1337 </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    11 sept. - 6 oct. 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>
            {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
            <div className="qualification__content" data-content id="work">
              {/* <!--==================== QUALIFICATION 1 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Digital Capital</h3>
                  <span className="qualification__subtitle">
                    Développeur back-end, spécialisé en Symfony.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    26 juil. - 26 août 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 2 ====================--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Dabador</h3>
                  <span className="qualification__subtitle"> </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 3 ====================--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Integral Tech</h3>
                  <span className="qualification__subtitle">
                    Développement d'une nouvelle solution ERP avec React,
                    TypeScript, Redux, et Tailwind. Traduction de l'ERP en
                    français, anglais, et arabe. Élaboration de la documentation
                    API avec Laravel. Révision des fautes d'orthographe dans
                    l'ancien ERP.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    03 août 2023 - Présent
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          {/* <!--==================== SERVICES 1 ====================--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                UI/UX <br />
                Designer
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  UI/UX <br />
                  Designer
                </h4>
                <i className="uil uil-times services__modal-close"></i>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create engaging and visually appealing designs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create responsive and accessible designs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--==================== SERVICES 2 ====================--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Frontend <br />
                Developer
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Frontend <br />
                  Developer
                </h4>
                <i className="uil uil-times services__modal-close"></i>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create engaging and visually appealing designs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create responsive and accessible designs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--==================== SERVICES 3 ====================--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-pen services__icon"></i>
              <h3 className="services__title">
                Branding <br />
                Designer
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Branding <br />
                  Designer
                </h4>
                <i className="uil uil-times services__modal-close"></i>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create engaging and visually appealing designs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create responsive and accessible designs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== PORTFOLIO ====================--> */}
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
              <div className="portfolio__content grid swiper-slide">
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
              <div className="portfolio__content grid swiper-slide">
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
              <div className="portfolio__content grid swiper-slide">
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
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!--==================== PROJECT IN MIND ====================--> */}
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You have a new project</h2>
              <p className="project__description">
                Contact me now and get a 20% discount on your first project.
              </p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me!
                <i className="uil uil-message project__icon button__icon"></i>
              </a>
            </div>
            <img src={project} alt="" className="project__img" />
          </div>
        </div>
      </section>

      {/* <!--==================== TESTIMONIAL ====================--> */}
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
                exceeded my expectations. His creativity, attention to detail,
                and communication are unparalleled. I highly recommend him!
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
                exceeded my expectations. His creativity, attention to detail,
                and communication are unparalleled. I highly recommend him!
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
                exceeded my expectations. His creativity, attention to detail,
                and communication are unparalleled. I highly recommend him!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <!--==================== CONTACT ME ====================--> */}
      <section className="contact section" id="contact">
        <h2 className="section__title">COntact Me</h2>
        <span className="section__subtitle">Get in touch</span>
        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+212 6 41 89 90 24</span>
              </div>
            </div>
            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">
                  takikaoutar01@gmail.com
                </span>
              </div>
            </div>
            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Morocco - MARRAKECH</span>
              </div>
            </div>
          </div>
          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label className="contact__label">Name</label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label className="contact__label">Email</label>
                <input type="email" className="contact__input" />
              </div>
            </div>
            <div className="contact__content">
              <label className="contact__label">Project</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label className="contact__label">Message</label>
              <textarea
                name=""
                id=""
                cols={0}
                rows={7}
                className="contact__input"
              ></textarea>
            </div>
            <div>
              <a href="#" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;

