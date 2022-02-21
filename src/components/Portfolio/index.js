import React, { useState } from 'react';
import github from "../../images/smallGit.png";
import takeOr from "../../images/takeor.png";
import exciteMe from "../../images/exciteme.png";
import budget from "../../images/budget.png";
import weather from "../../images/weather.png";
import note from "../../images/note.png";
import api from "../../images/api.png";

function Portfolio() {

    const [apps] = useState([
        {
            name: "Take It or Leave It",
            appLink: "https://desolate-dusk-43697.herokuapp.com/",
            gitHub: "https://github.com/nmendez4/take-it-or-leave-it",
            description: "MERN Stack",
            pic: `${takeOr}`,
        },
        {
            name: "ExciteMe",
            appLink: "https://lazylizard95.github.io/groupproject/",
            gitHub: "https://github.com/LazyLizard95/groupproject",
            description: "HTML/CSS/JS",
            pic: `${exciteMe}`,
        },
        {
            name: "Budget Tracker",
            appLink: "https://pure-harbor-24321.herokuapp.com/",
            gitHub: "https://github.com/Hlaing56/Budget-Tracker",
            description: "MERN Stack",
            pic: `${budget}`,
        },
        {
            name: "Weather Dashboard",
            appLink: "https://hlaing56.github.io/Weather-Dashboard/",
            gitHub: "https://github.com/Hlaing56/Weather-Dashboard",
            description: "HTML/CSS/JS",
            pic: `${weather}`,
        },
        {
            name: "Note Taker",
            appLink: "https://sheltered-hamlet-23044.herokuapp.com/",
            gitHub: "https://github.com/Hlaing56/Note-Taker",
            description: "Express/JS",
            pic: `${note}`,
        },
        {
            name: "Social-Network-API",
            gitHub: "https://github.com/Hlaing56/Social-Network-API",
            description: "Express/JS/MongoDB",
            pic: `${api}`,
        },

    ])



  return (
    <section >
        Portfolio (click the name of the project to go to deployed app and gitHub logo to go to the gitHub repo)
        <div className="ow">
        {apps.map((apps) => (
        <div className="container">
            <img src={apps.pic} alt="pic of app"/>
            <div className="text-block">
                <h4>
                    <a href={apps.appLink} style={{ color: "black" }}>
                        {apps.name}
                    </a> | <a href={apps.gitHub}> 
                    <img src={github} alt="github logo"/>
                    </a>
                </h4>
                <p style={{ color: "black" }}>{apps.description}</p>
            </div>
        </div>
        ))}
        </div>
    </section>
  );
}

export default Portfolio;


