import { useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(0);

  const toggleSkills = (index: number) => {
    setActiveSkill(activeSkill === index ? null : index); // Toggle the active skill
  };

  return (
    <>
      <section className="skills section" id="skills">
        {/* skills,section */}
        <h2 className="section__title">Skills</h2>
        {/* section__title  */}
        <span className="section__subtitle">My technical level</span>
        {/* section__subtitle  */}
        <div className="skills__container max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          {/* skills__container  */}
          {/* SKILLS 1 */}
          <div
            className={`skills__content ${
              activeSkill === 0 ? "skills__open" : "skills__close"
            }`}
          >
            {/* skills__content, skills__open, skills__close  */}
            <div className="skills__header" onClick={() => toggleSkills(0)}>
              {/* skills__header   */}
              <i className="uil uil-brackets-curly skills__icon"></i>
              {/* skills__icon */}
              <div>
                <h1 className="skills__titles">Frontend developer</h1>
                {/* skills__titles  */}
                <span className="skills__subtitle">More than 1 years</span>
                {/* skills__subtitle  */}
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
              {/* skills__arrow  */}
            </div>
            <div className="skills__list grid gap-6">
              {/* skills__list   */}
              <div className="skills__data">
                {/* skills__data   */}
                <div className="skills__titles">
                  {/* skills__titles  */}
                  <h3 className="skills__name">HTML</h3>
                  {/* skills__name   */}
                  <span className="skills__number">90%</span>
                  {/* skills__number   */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar    */}
                  <span className="skills__percentage skills__html"></span>
                  {/* skills__percentage ,   skills__html    */}
                </div>
              </div>
              <div className="skills__data">
                {/* skills__data    */}
                <div className="skills__titles">
                  {/* skills__titles    */}
                  <h3 className="skills__name">CSS</h3>
                  {/* skills__name   */}
                  <span className="skills__number">80%</span>
                  {/* skills__number    */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar    */}
                  <span className="skills__percentage skills__css"></span>
                  {/* skills__percentage , skills__css    */}
                </div>
              </div>
              <div className="skills__data">
                {/* skills__data    */}
                <div className="skills__titles">
                  {/* skills__titles    */}
                  <h3 className="skills__name">JavaScript</h3>
                  {/* skills__name    */}
                  <span className="skills__number">60%</span>
                  {/* skills__number    */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar     */}
                  <span className="skills__percentage skills__js"></span>
                  {/* skills__percentage , skills__js     */}
                </div>
              </div>
              <div className="skills__data">
                {/* skills__data     */}
                <div className="skills__titles">
                  {/* skills__titles     */}
                  <h3 className="skills__name">React</h3>
                  {/* skills__name     */}
                  <span className="skills__number">85%</span>
                  {/* skills__number     */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar    */}
                  <span className="skills__percentage skills__react"></span>
                  {/* skills__percentage , skills__react     */}
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS 2 */}
          <div
            className={`skills__content ${
              activeSkill === 1 ? "skills__open" : "skills__close"
            }`}
          >
            {/* skills__content , skills__open , skills__close    */}
            <div className="skills__header" onClick={() => toggleSkills(1)}>
              {/* skills__header     */}
              <i className="uil uil-server-network skills__icon"></i>
              {/* skills__icon      */}
              <div>
                <h1 className="skills__titles">Backend developer</h1>
                {/* skills__titles    */}
                <span className="skills__subtitle">More than 1 years</span>
                {/* skills__subtitle     */}
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
              {/* skills__arrow      */}
            </div>
            <div className="skills__list grid gap-6">
              {/* skills__list    */}
              <div className="skills__data">
                {/* skills__data */}
                <div className="skills__titles">
                  {/* skills__titles    */}
                  <h3 className="skills__name">PHP</h3>
                  {/* skills__name     */}
                  <span className="skills__number">80%</span>
                  {/* skills__number    */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar     */}
                  <span className="skills__percentage skills__php"></span>
                  {/* skills__percentage , skills__php     */}
                </div>
              </div>
              <div className="skills__data">
                {/* skills__data   */}
                <div className="skills__titles">
                  {/* skills__titles    */}
                  <h3 className="skills__name">LARAVEL</h3>
                  {/* skills__name    */}
                  <span className="skills__number">70%</span>
                  {/* skills__number    */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar     */}
                  <span className="skills__percentage skills__laravel"></span>
                  {/* skills__percentage , skills__laravel     */}
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS 3 */}
          <div
            className={`skills__content ${
              activeSkill === 2 ? "skills__open" : "skills__close"
            }`}
          >
            {/* skills__content , skills__open , skills__close */}
            <div className="skills__header" onClick={() => toggleSkills(2)}>
              {/* skills__header  */}
              <i className="uil uil-swatchbook skills__icon"></i>
              {/* skills__icon  */}
              <div>
                <h1 className="skills__titles">Designer</h1>
                {/* skills__titles  */}
                <span className="skills__subtitle">More than 1 years</span>
                {/* skills__subtitle  */}
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
              {/* skills__arrow  */}
            </div>
            <div className="skills__list grid gap-6">
              {/* skills__list */}
              <div className="skills__data">
                {/* skills__data   */}
                <div className="skills__titles">
                  {/* skills__titles    */}
                  <h3 className="skills__name">FIGMA</h3>
                  {/* skills__name     */}
                  <span className="skills__number">80%</span>
                  {/* skills__number     */}
                </div>
                <div className="skills__bar">
                  {/* skills__bar     */}
                  <span className="skills__percentage skills__figma"></span>
                  {/* skills__percentage , skills__figma      */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

