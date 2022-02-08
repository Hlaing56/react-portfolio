import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from "./components/Contact";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
      {contactSelected ? (
        <ContactForm></ContactForm>
      ): (
        "ligma"
      )}
      </main>
    </div>
  );
}

export default App;
