const ContactMe = () => (
  <section className="contact section" id="contact">
    <h2 className="section__title">Contactez-moi</h2>
    <span className="section__subtitle">Entrer en contact</span>
    <div className="contact__container container grid">
      <div>
        {[
          {
            icon: "uil uil-phone",
            title: "Appelez-moi",
            subtitle: "+212 6 41 89 90 24",
          },
          {
            icon: "uil uil-envelope",
            title: "Email",
            subtitle: "takikaoutar01@gmail.com",
          },
          {
            icon: "uil uil-map-marker",
            title: "Localisation",
            subtitle: "Maroc - Marrakech",
          },
        ].map((info, index) => (
          <div className="contact__information" key={index}>
            <i className={`${info.icon} contact__icon`}></i>
            <div>
              <h3 className="contact__title">{info.title}</h3>
              <span className="contact__subtitle">{info.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
      <form action="" className="contact__form grid">
        <div className="contact__inputs grid">
          {[
            { label: "Nom", type: "text" },
            { label: "Email", type: "email" },
          ].map((input, index) => (
            <div className="contact__content" key={index}>
              <label className="contact__label">{input.label}</label>
              <input type={input.type} className="contact__input" />
            </div>
          ))}
        </div>
        <div className="contact__content">
          <label className="contact__label">Projet</label>
          <input type="text" className="contact__input" />
        </div>
        <div className="contact__content">
          <label className="contact__label">Message</label>
          <textarea cols={0} rows={7} className="contact__input"></textarea>
        </div>
        <div>
          <a href="#" className="button button--flex">
            Envoyer le message
            <i className="uil uil-message button__icon"></i>
          </a>
        </div>
      </form>
    </div>
  </section>
);

export default ContactMe;

