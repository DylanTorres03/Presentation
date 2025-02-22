import React from "react";
import Header from "./componentes/Header/Header";
import AboutMe from "./componentes/AboutMe/AboutMe";
import Projects from "./componentes/Projects/Projects";
import Contact from "./componentes/Contact/Contact";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
