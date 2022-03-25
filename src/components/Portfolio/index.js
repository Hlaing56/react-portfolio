import React, { useState } from 'react';
import github from "../../images/smallGit.png";
import takeOr from "../../images/takeor.png";
import exciteMe from "../../images/exciteme.png";
import budget from "../../images/budget.png";
import weather from "../../images/weather.png";
import note from "../../images/note.png";
import api from "../../images/api.png";
import apollo from "../../images/Apollo.png";

function Portfolio() {

    const [apps] = useState([
        {
            name: "Apollo",
            appLink: "https://immense-bastion-87765.herokuapp.com/",
            gitHub: "https://github.com/Hlaing56/apollo",
            description: "Apollo is an app that lets users see and make wagers to see who can get the most coins at the end of the week. It is also a scalable, user-focused MERN app where users can make profiles and wagers of their own.",
            pic: `${apollo}`,
            tools: "Graphql, mongodb, react.js, heroku / javascript"
        },
        {
            name: "Take It or Leave It",
            appLink: "https://desolate-dusk-43697.herokuapp.com/",
            gitHub: "https://github.com/nmendez4/take-it-or-leave-it",
            description: "Take it or Leave It is a comprehensive platform that lets users sign in and build a profile that allows them list used items for sale, and purchase items from other sellers. The site's products range from clothing and furniture to appliances and electronics.",
            pic: `${takeOr}`,
            tools: "Handlebars.js, MySQL, Express, Sequelize ORM / javascript"
        },
        {
            name: "ExciteMe",
            appLink: "https://lazylizard95.github.io/groupproject/",
            gitHub: "https://github.com/LazyLizard95/groupproject",
            description: "Provide inspiration to an individual that is looking for something new to do by randomly generated activity that provides excitement and will keep user coming back",
            pic: `${exciteMe}`,
            tools: "Html, Skeleton CSS, google search box api, bored api  / javascript"
        },
        {
            name: "Budget Tracker",
            appLink: "https://pure-harbor-24321.herokuapp.com/",
            gitHub: "https://github.com/Hlaing56/Budget-Tracker",
            description: "Updated an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online",
            pic: `${budget}`,
            tools: "indexedDB, serviceworker and manifest for icons"
        },
        {
            name: "Weather Dashboard",
            appLink: "https://hlaing56.github.io/Weather-Dashboard/",
            gitHub: "https://github.com/Hlaing56/Weather-Dashboard",
            description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS using openweather api.",
            pic: `${weather}`,
            tools: "Html, CSS, javascript and openweather api"
        },
        {
            name: "Note Taker",
            appLink: "https://sheltered-hamlet-23044.herokuapp.com/",
            gitHub: "https://github.com/Hlaing56/Note-Taker",
            description: "An application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
            pic: `${note}`,
            tools: "Html, CSS, javascript and Express.js"
        },
        {
            name: "Social-Network-API",
            gitHub: "https://github.com/Hlaing56/Social-Network-API",
            description: "Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
            pic: `${api}`,
            tools: "Html, CSS, javascript, Express.js, MongoDB and Mongoose ODM"
        },

    ])



  return (
    <section >
        <div className="ow">
        {apps.map((apps) => (
        <div className="container">
            <a href={apps.appLink} target="_blank"> 
            <img className="hover" src={apps.pic} alt="pic of app"/> 
            </a>
            
            <div >
                <h4>
                    <p style={{ color: "black" }}>
                        {apps.name} | <a href={apps.gitHub} target="_blank"> <img className="hover" src={github} alt="github logo"/> </a>
                    </p>
                </h4>
                <p className="desc" style={{ color: "black" }}>{apps.description}</p>
                <p className="desc" style={{ color: "black" }}>{apps.tools}</p>
            </div>
        </div>
        ))}
        </div>
    </section>
  );
}

export default Portfolio;


