import letskeeptrack from "./assets/images/letskeeptrack.png";
import wineanddine from "./assets/images/wineanddine.png";
import readmescreenshot from "./assets/images/readme-screenshot.jpg";
import "./styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio component</h2>
      <div class="imageContainer">
        <div class="image1">
          <img src={readmescreenshot} title="FirstPortfolio"></img>
        </div>
        <br></br>This project was my very first time using HTML and CSS. I'm
        including it in my portfolio to show my growth.
        <br></br>GitHub Repository:
        <a
          href="https://github.com/bgilbreath/bobby-gilbreath-portfolio"
          title="GitHub"
        >
          https://github.com/bgilbreath/bobby-gilbreath-portfolio
        </a>
        <br></br>Deployed:
        <a
          href="https://bgilbreath.github.io/bobby-gilbreath-portfolio"
          title="Deployed"
        >
          https://bgilbreath.github.io/bobby-gilbreath-portfolio
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
        <br></br>GitHub Repository:
        <a
          href="https://github.com/TerryBoufis/Dine-and-Wine-App"
          title="GitHub"
        >
          https://github.com/TerryBoufis/Dine-and-Wine-App
        </a>
        <br></br>Deployed:
        <a
          href="https://terryboufis.github.io/Dine-and-Wine-App"
          title="Deployed"
        >
          https://terryboufis.github.io/Dine-and-Wine-App
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
        <br></br>GitHub Repository:
        <a
          href="https://github.com/cmurphgarv/Project-Management-App"
          title="GitHub"
        >
          https://github.com/cmurphgarv/Project-Management-App
        </a>
        <br></br>Deployed:
        <a
          href="https://project-management-2022-but.herokuapp.com"
          title="Deployed"
        >
          https://project-management-2022-but.herokuapp.com
        </a>
      </div>
      <br></br>
    </div>
  );
}
