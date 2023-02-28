import letskeeptrack from "./assets/images/letskeeptrack.png";
import wineanddine from "./assets/images/wineanddine.png";
import readmescreenshot from "./assets/images/readme-screenshot.jpg";
import midwestmakersmarket from "./assets/images/midwestmakersmarket.jpg";
import "./styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>
        Here is a collection of my full-stack projects, arranged from most to
        least recent. I've included my first project to show the growth I've
        made.
      </p>
      <br></br>
      <div class="imageContainer">
        <div class="image4">
          <img src={midwestmakersmarket} title="MidwestMakersMarket"></img>
        </div>
        <br></br>This was our final project, putting together everything we've
        learned into a MERN-stack.
        <br></br>
        <br></br>GitHub Repository:
        <a href="https://github.com/cmurphgarv/Makers-Market" title="GitHub">
          GitHub
        </a>
        <br></br>Deployed:
        <a href="https://makers-market.herokuapp.com/" title="Deployed">
          Heroku
        </a>
      </div>
      <br></br>
      <br></br>
      <div class="imageContainer">
        <div class="image3">
          <img src={letskeeptrack} title="LetsKeepTrack"></img>
        </div>
        <br></br>This project was our second group project, and utilized our
        newfound knowledge in GET/POST routes.
        <br></br>
        <br></br>GitHub Repository:
        <a
          href="https://github.com/cmurphgarv/Project-Management-App"
          title="GitHub"
        >
          GitHub
        </a>
        <br></br>Deployed:
        <a
          href="https://project-management-2022-but.herokuapp.com"
          title="Deployed"
        >
          Heroku
        </a>
      </div>
      <br></br>
      <br></br>
      <div class="imageContainer">
        <div class="image2">
          <img src={wineanddine} title="WineAndDine"></img>
        </div>
        <br></br>This project was our first group project, utilizing a
        third-party API.
        <br></br>
        <br></br>GitHub Repository:
        <a
          href="https://github.com/TerryBoufis/Dine-and-Wine-App"
          title="GitHub"
        >
          GitHub
        </a>
        <br></br>Deployed:
        <a
          href="https://terryboufis.github.io/Dine-and-Wine-App"
          title="Deployed"
        >
          Heroku
        </a>
      </div>
      <br></br>

      <br></br>
      <div class="imageContainer">
        <div class="image1">
          <img src={readmescreenshot} title="FirstPortfolio"></img>
        </div>
        <br></br>This project was my very first time using HTML and CSS. I'm
        including it in my portfolio to show my growth.
        <br></br>
        <br></br>GitHub Repository:
        <a
          href="https://github.com/bgilbreath/bobby-gilbreath-portfolio"
          title="GitHub"
        >
          GitHub
        </a>
        <br></br>Deployed:
        <a
          href="https://bgilbreath.github.io/bobby-gilbreath-portfolio"
          title="Deployed"
        >
          Heroku
        </a>
      </div>
    </div>
  );
}
