const ContactMe = () => {
  return (
    <>
      <section className="contact section" id="contact">
        {/* contact,section  */}
        <h2 className="section__title">Contact Me</h2>
        {/* section__title  */}
        <span className="section__subtitle">Get in touch</span>
        {/* section__subtitle  */}
        <div className="contact__container max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          {/* contact__container */}
          <div>
            <div className="contact__information">
              {/* contact__information  */}
              <i className="uil uil-phone contact__icon"></i>
              {/* contact__icon   */}
              <div>
                <h3 className="contact__title">Call Me</h3>
                {/* contact__title   */}
                <span className="contact__subtitle">+212 6 41 89 90 24</span>
                {/* contact__subtitle   */}
              </div>
            </div>
            <div className="contact__information">
              {/* contact__information */}
              <i className="uil uil-envelope contact__icon"></i>
              {/* contact__icon   */}
              <div>
                <h3 className="contact__title">Email</h3>
                {/* contact__title    */}
                <span className="contact__subtitle">
                  {/* contact__subtitle    */}
                  takikaoutar01@gmail.com
                </span>
              </div>
            </div>
            <div className="contact__information">
              {/* contact__information  */}
              <i className="uil uil-map-marker contact__icon"></i>
              {/* contact__icon   */}
              <div>
                <h3 className="contact__title">Location</h3>
                {/* contact__title    */}
                <span className="contact__subtitle">Morocco - MARRAKECH</span>
                {/* contact__subtitle    */}
              </div>
            </div>
          </div>
          <form action="" className="contact__form grid gap-6">
            {/* contact__form*/}
            <div className="contact__inputs grid gap-6">
              {/* contact__inputs */}
              <div className="contact__content">
                {/* contact__content */}
                <label className="contact__label">Name</label>
                {/* contact__label  */}
                <input type="text" className="contact__input" />
                {/* contact__input  */}
              </div>
              <div className="contact__content">
                {/* contact__content */}
                <label className="contact__label">Email</label>
                {/* contact__label   */}
                <input type="email" className="contact__input" />
                {/* contact__input   */}
              </div>
            </div>
            <div className="contact__content">
              {/* contact__content  */}
              <label className="contact__label">Project</label>
              {/* contact__label   */}
              <input type="text" className="contact__input" />
              {/* contact__input    */}
            </div>
            <div className="contact__content">
              {/* contact__content    */}
              <label className="contact__label">Message</label>
              {/* contact__label     */}
              <textarea
                name=""
                id=""
                cols={0}
                rows={7}
                className="contact__input"
              ></textarea>
              {/* contact__input     */}
            </div>
            <div>
              <a href="#" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
                {/*button__icon */}
              </a>
              {/* button ,button--flex  */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactMe;

