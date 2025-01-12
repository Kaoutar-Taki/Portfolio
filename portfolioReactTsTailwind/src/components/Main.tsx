import About from "./About";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Qualification from "./Qualification";
import Skills from "./Skills";
const Main = () => {
  return (
    <>
      <main className="md:px-4 lg:p-0">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <ContactMe />
      </main>
    </>
  );
};

export default Main;

