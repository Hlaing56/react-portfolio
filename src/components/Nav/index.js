import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        aboutSelected,
        setAboutSelected
      } = props;


    return(
        <header className="flex-row px-1">
        <h1>
            Hlaing Aung
        </h1>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <span onClick={() => {
                setAboutSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}>About me</span>
            </li>
            {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li> */}
            <li className="mx-2">
                Portfolio
            </li>
            <li className="mx-2">
                <span onClick={() => {
                    setContactSelected(true);
                    setResumeSelected(false);
                    setAboutSelected(false);
                }}>Contact</span>
            </li>
            <li className="mx-2">
                <span onClick={() => {
                    setResumeSelected(true);
                    setContactSelected(false);
                    setAboutSelected(false);
                }}>Resume</span>
            </li>
          </ul>
        </nav>
      </header>
    );

}

export default Nav;