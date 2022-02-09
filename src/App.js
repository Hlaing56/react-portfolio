import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from "./components/Contact";
import Resume from './components/Resume';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(true);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      />
      <main>
      {aboutSelected ? (
        <About/>
      ): (
        ""
      )}

      {portfolioSelected ? (
        <Portfolio/>
      ): (
        ""
      )}

      {contactSelected ? (
        <ContactForm/>
      ): (
        ""
      )}

      {resumeSelected ? (
        <Resume/>
      ): (
        ""
      )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
