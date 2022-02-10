import React from 'react';

function Nav({ currentPage, setCurrentPage }) {

  return(
    <header className="flex-row px-1">
      <h1>
        Hlaing Aung
      </h1>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${currentPage === 'About' && 'navActive'}`}>
              <span onClick={() => setCurrentPage('About')}>About me</span>
          </li>
          <li className={`mx-2 ${currentPage === 'Portfolio' && 'navActive'}`}>
              <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
          </li>
          <li className={`mx-2 ${currentPage === 'Contact' && 'navActive'}`}>
              <span onClick={() => setCurrentPage('Contact')}>Contact</span>
          </li>
          <li className={`mx-2 ${currentPage === 'Resume' && 'navActive'}`}>
              <span onClick={() => setCurrentPage('Resume')}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;