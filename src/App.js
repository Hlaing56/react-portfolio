import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Contact from "./components/Contact";
import Resume from './components/Resume';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    return <Portfolio />;
  };

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main>
        {renderPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;