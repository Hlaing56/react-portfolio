import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected
      } = props;


    return(
        <header className="flex-row px-1">
        <h2>
            Hlaing Aung
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              {/* <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me
              </a> */}
              About me 
            </li>
            {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li> */}
            <li className="mx-2">
                Portfolio
            </li>
            <li className="mx-2">
                <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            <li className="mx-2">
                Resume
            </li>
          </ul>
        </nav>
      </header>
    );

}

export default Nav;