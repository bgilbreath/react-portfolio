import "./styles/AboutMe.css";
import AboutMeImage from "./assets/images/header-img.jpg";
export default function AboutMe() {
  return (
    <div>
      <h2>About Me </h2>
      <div class="imageContainerAboutMe">
        <img src={AboutMeImage} alt="AboutMeImage"></img>
      </div>
      <section class="aboutMeSection">
        Recent full-stack bootcamp graduate through Butler and BFA graduate from
        Herron School of Art, independently driven, creative individual with
        excellent problem solving skills, a drive to constantly learn and
        improve, and a passion for community.
        <br></br>
        Check out my recent work in the Portfolio section. I've included my
        first, least impressive, portfolio in order to show my growth. In just 6
        short months I've gone from a very basic understanding of HTML to
        creating full-stack apps.
        <br></br>
        Enjoy!
      </section>
    </div>
  );
}
