import { useState } from "react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="qualification section" id="qualification">
      {/* qualification ,section */}
      <h2 className="section__title">Qualification</h2>
      {/* section__title  */}
      <span className="section__subtitle">My personal journey</span>
      {/* section__subtitle  */}
      <div className="qualification__container max-w-3xl mx-6 sm:mx-4 md:mx-auto">
        {/* qualification__container */}
        <div
          className="qualification__tabs"
          role="tablist"
          aria-label="Qualification tabs"
        >
          {/* qualification__tabs  */}
          <div
            className={`qualification__button button--flex ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "education"}
            aria-controls="education"
            onClick={() => handleTabClick("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {/* qualification__icon */}
            Education
          </div>
          {/* qualification__button , button--flex , education , qualification__active */}
          <div
            className={`qualification__button button--flex ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "work"}
            aria-controls="work"
            onClick={() => handleTabClick("work")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {/* qualification__icon */}
            Work
          </div>
          {/* qualification__button , button--flex , work , qualification__active */}
        </div>

        <div className="qualification__sections">
          {/*qualification__sections */}
          {/* Education Tab Content */}
          {activeTab === "education" && (
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
              role="tabpanel"
              aria-labelledby="education-tab"
            >
              {/* qualification__content , qualification__active */}
              {/* Education 1 */}
              <div className="qualification__data">
                {/* qualification__data  */}
                <div>
                  <h3 className="qualification__title">
                    {/* qualification__title */}
                    Baccalauréat en séries professionnelles.
                  </h3>
                  <span className="qualification__subtitle">
                    {/* qualification__subtitle */}
                    Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    {/* qualification__calendar  */}
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder */}
                  <span className="qualification__line"></span>
                  {/* qualification__line */}
                </div>
              </div>
              {/* Education 2 */}
              <div className="qualification__data">
                {/* qualification__data */}
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder  */}
                  <span className="qualification__line"></span>
                  {/* qualification__line  */}
                </div>
                <div>
                  <h3 className="qualification__title">
                    {/* qualification__title */}
                    Technicien Spécialisé en Développement Digital.
                  </h3>
                  <span className="qualification__subtitle">
                    {/* qualification__subtitle */}
                    ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    {/* qualification__calendar */}
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2023
                  </div>
                </div>
              </div>
              {/* Education 3 */}
              <div className="qualification__data">
                {/* qualification__data  */}
                <div>
                  <h3 className="qualification__title">
                    {/*  qualification__title */}
                    Programme de formation en développement digital.
                  </h3>
                  <span className="qualification__subtitle">1337</span>
                  {/* qualification__subtitle  */}
                  <div className="qualification__calendar">
                    {/* qualification__calendar  */}
                    <i className="uil uil-calendar-alt"></i>
                    11 sept. - 6 oct. 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder  */}
                </div>
              </div>
            </div>
          )}

          {/* Work Tab Content */}
          {activeTab === "work" && (
            <div
              className="qualification__content qualification__active"
              data-content
              id="work"
              role="tabpanel"
              aria-labelledby="work-tab"
            >
              {/* qualification__content , qualification__active  */}
              {/* Work 1 */}
              <div className="qualification__data">
                {/* qualification__data */}
                <div>
                  <h3 className="qualification__title">Digital Capital</h3>
                  {/* qualification__title  */}
                  <span className="qualification__subtitle">
                    {/* qualification__subtitle */}
                    Développeur back-end, spécialisé en Symfony.
                  </span>
                  <div className="qualification__calendar">
                    {/* qualification__calendar */}
                    <i className="uil uil-calendar-alt"></i>
                    26 juil. - 26 août 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder */}
                  <span className="qualification__line"></span>
                  {/* qualification__line */}
                </div>
              </div>
              {/* Work 2 */}
              <div className="qualification__data">
                {/* qualification__data */}
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder */}
                  <span className="qualification__line"></span>
                  {/* qualification__line  */}
                </div>
                <div>
                  <h3 className="qualification__title">Dabador</h3>
                  {/* qualification__title  */}
                  <div className="qualification__calendar">
                    {/* qualification__calendar  */}
                    <i className="uil uil-calendar-alt"></i>
                  </div>
                </div>
              </div>
              {/* Work 3 */}
              <div className="qualification__data">
                {/* qualification__data  */}
                <div>
                  <h3 className="qualification__title">Integral Tech</h3>
                  {/* qualification__title  */}
                  <span className="qualification__subtitle">
                    {/* qualification__subtitle */}
                    Développement d'une nouvelle solution ERP avec React,
                    TypeScript, Redux, et Tailwind.
                  </span>
                  <div className="qualification__calendar">
                    {/* qualification__calendar  */}
                    <i className="uil uil-calendar-alt"></i>
                    03 août 2023 - Présent
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* qualification__rounder */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;

