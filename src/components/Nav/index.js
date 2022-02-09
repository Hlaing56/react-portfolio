import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected
      } = props;


    return(
        <header className="flex-row px-1">
        <h1>
            Hlaing Aung
        </h1>
        <nav>
          <ul className="flex-row">
            <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                <span onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setResumeSelected(false);
                  setPortfolioSelected(false);
                }}>About me</span>
            </li>
            <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                <span onClick={() => {
                  setPortfolioSelected(true);
                  setAboutSelected(false);
                  setContactSelected(false);
                  setResumeSelected(false);
                }}>Portfolio</span>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => {
                    setContactSelected(true);
                    setResumeSelected(false);
                    setAboutSelected(false);
                    setPortfolioSelected(false);                
                }}>Contact</span>
            </li>
            <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                <span onClick={() => {
                    setResumeSelected(true);
                    setContactSelected(false);
                    setAboutSelected(false);
                    setPortfolioSelected(false);
                }}>Resume</span>
            </li>
          </ul>
        </nav>
      </header>
    );

}

export default Nav;