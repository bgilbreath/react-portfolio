import letskeeptrack from "./assets/images/letskeeptrack.png";
import wineanddine from "./assets/images/wineanddine.png";
import readmescreenshot from "./assets/images/readme-screenshot.jpg";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio component</h2>
      <div class="imageContainer">
        <div class="image1">
          <img src={readmescreenshot} title="FirstPortfolio"></img>
        </div>
        <div class="image2">
          <img src={wineanddine} title="WineAndDine"></img>
        </div>
        <div class="image3">
          <img src={letskeeptrack} title="LetsKeepTrack"></img>
        </div>
      </div>
    </div>
  );
}
