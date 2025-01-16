const ContactMe = () => {
  return (
    <>
      <section className="p-8 md:p-24 md:pt-24 md:pb-8" id="contact">
        <h2 className="text-2xl md:text-4xl text-center">Contactez-moi</h2>
        <span className="block text-sm md:text-base mb-12 text-center md:mb-16">
          Entrer en contact
        </span>
        <div className="gap-y-12 sm:grid-cols-2 max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          <div>
            <div className="flex mb-8">
              <i className="uil uil-phone text-3xl text-[hsl(23,69%,61%)] mr-3"></i>
              <div>
                <h3 className="text-lg md:text-xl font-medium">Appelez-moi</h3>
                <span className="text-xs md:text-sm text-[hsl(23,8%,65%)]">
                  +212 6 41 89 90 24
                </span>
              </div>
            </div>
            <div className="flex mb-8">
              <i className="uil uil-envelope text-3xl text-[hsl(23,69%,61%)] mr-3"></i>
              <div>
                <h3 className="text-lg md:text-xl font-medium">Email</h3>
                <span className="text-xs md:text-sm text-[hsl(23,8%,65%)]">
                  takikaoutar01@gmail.com
                </span>
              </div>
            </div>
            <div className="flex mb-8">
              <i className="uil uil-map-marker text-3xl text-[hsl(23,69%,61%)] mr-3"></i>
              <div>
                <h3 className="text-lg md:text-xl font-medium">Emplacement</h3>
                <span className="text-xs md:text-sm text-[hsl(23,8%,65%)]">
                  Maroc - MARRAKECH
                </span>
              </div>
            </div>
          </div>
          <form className="w-96 grid gap-6">
            <div className="grid gap-6">
              <div className="bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] rounded-lg p-3.5 pl-4 pr-4 pt-3">
                <label className="text-xs md:text-sm text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] text-[hsl(23,8%,45%)] dark:text-[hsl(23,8%,75%)] font-mono text-sm md:text-base border-none outline-none p-1 pt-0.5 pl-0 lg:grid-cols-2"
                />
              </div>
              <div className="bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] rounded-lg p-3.5 pl-4 pr-4 pt-3">
                <label className="text-xs md:text-sm text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] text-[hsl(23,8%,45%)] dark:text-[hsl(23,8%,75%)] font-mono text-sm md:text-base border-none outline-none p-1 pt-0.5 pl-0 lg:grid-cols-2"
                />
              </div>
            </div>
            <div className="bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] rounded-lg p-3.5 pl-4 pr-4 pt-3">
              <label className="text-xs md:text-sm text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                Projet
              </label>
              <input
                type="text"
                className="w-full bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] text-[hsl(23,8%,45%)] dark:text-[hsl(23,8%,75%)] font-mono text-sm md:text-base border-none outline-none p-1 pt-0.5 pl-0 lg:grid-cols-2"
              />
            </div>
            <div className="bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] rounded-lg p-3.5 pl-4 pr-4 pt-3">
              <label className="text-xs md:text-sm text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                Message
              </label>
              <textarea
                cols={0}
                rows={7}
                className="w-full bg-[hsl(23,70%,96%)] dark:bg-[hsl(23,29%,16%)] text-[hsl(23,8%,45%)] dark:text-[hsl(23,8%,75%)] font-mono text-sm md:text-base border-none outline-none p-1 pt-0.5 pl-0 lg:grid-cols-2"
              ></textarea>
            </div>
            <div>
              <a
                href="#"
                className="inline-block bg-[hsl(23,69%,61%)] text-white p-4 rounded-lg font-medium hover:bg-[hsl(23,57%,53%)] items-center"
              >
                Envoyer le message
                <i className="uil uil-message text-xl ml-2 transition duration-300"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactMe;

