import Navbar from "./components/Navbar";

import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Content from "./components/Content";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <AboutMe />
      <Content />
      <Book />
      <Contact />
      <Footer />
    </>
  );
}
