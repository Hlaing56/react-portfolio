import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from "./components/Contact";
import Resume from './components/Resume';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      />
      <main>
      {aboutSelected ? (
        <About/>
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
