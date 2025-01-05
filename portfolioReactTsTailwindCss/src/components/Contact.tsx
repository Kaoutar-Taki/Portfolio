import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact py-8 md:py-24" id="contact">
      <h2 className="text-xl md:text-4xl text-center text-[hsl(23,8%,15%)] font-semibold">
        Contact Me
      </h2>
      <span className="text-sm md:text-base text-center text-[hsl(23,8%,42%)] block mb-10">
        Get in touch
      </span>
      <div className="mx-6 sm:mx-4 max-w-full sm:max-w-[768px] md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex mb-8">
            <i className="uil uil-phone text-[2rem] text-[#db784e] mr-3"></i>
            <div>
              <h3 className="text-[1.125rem] font-[500] text-[hsl(23,8%,15%)]">
                Call Me
              </h3>
              <span className="text-[0.813rem] text-[#3b2a2b]">
                +212 6 41 89 90 24
              </span>
            </div>
          </div>
          <div className="flex mb-8">
            <i className="uil uil-envelope text-[2rem] text-[#db784e] mr-3"></i>
            <div>
              <h3 className="text-[1.125rem] font-[500] text-[hsl(23,8%,15%)]">
                Email
              </h3>
              <span className="text-[0.813rem] text-[#3b2a2b]">
                takikaoutar01@gmail.com
              </span>
            </div>
          </div>
          <div className="flex mb-8">
            <i className="uil uil-map-marker text-[2rem] text-[#db784e] mr-3"></i>
            <div>
              <h3 className="text-[1.125rem] font-[500] text-[hsl(23,8%,15%)]">
                Location
              </h3>
              <span className="text-[0.813rem] text-[#3b2a2b]">
                Morocco - MARRAKECH
              </span>
            </div>
          </div>
        </div>
        <form action="" className="grid gap-6 w-full">
          <div className="contact__inputs grid gap-6">
            <div className="bg-[#e9b9b2] rounded-lg py-3 px-4 mb-1">
              <label className="text-[0.75rem] text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-[hsl(23, 70%, 96%)] text-[hsl(23, 8%, 45%)] font-['Roboto Mono', 'monospace'] py-1 px-2"
              />
            </div>
            <div className="bg-[#e9b9b2] rounded-lg py-3 px-4 mb-1">
              <label className="text-[0.75rem] text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[hsl(23, 70%, 96%)] text-[hsl(23, 8%, 45%)] font-['Roboto Mono', 'monospace'] py-1 px-2"
              />
            </div>
          </div>
          <div className="bg-[#e9b9b2] rounded-lg py-3 px-4 mb-1">
            <label className="text-[0.75rem] text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
              Project
            </label>
            <input
              type="text"
              className="w-full bg-[hsl(23, 70%, 96%)] text-[hsl(23, 8%, 45%)] font-['Roboto Mono', 'monospace'] py-1 px-2"
            />
          </div>
          <div className="bg-[#e9b9b2] rounded-lg py-3 px-4 mb-1">
            <label className="text-[0.75rem] text-[hsl(23, 8%, 15%)] dark:text-[hsl(23, 8%, 95%)]">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols={0}
              rows={7}
              className="w-full bg-[hsl(23, 70%, 96%)] text-[hsl(23, 8%, 45%)] font-['Roboto Mono', 'monospace'] py-1 px-2"
            ></textarea>
          </div>
          <div>
            <a
              href="#"
              className="bg-[#db784e] text-white py-4 px-6 rounded-lg font-500 hover:bg-[#ca4f3f] inline-flex items-center no-underline"
            >
              Send Message
              <i className="uil uil-message text-[1.25rem] ml-2 transition-all"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

