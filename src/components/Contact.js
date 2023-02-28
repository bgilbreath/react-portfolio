import "./styles/Contact.css";
export default function Contact() {
  return (
    <div class="contactDiv">
      <h2>Contact </h2>
      {/* <input type="text" id="contactForm"></input>
      <br></br>
      <input type="submit" id="formSubmit"></input>
      <br></br> */}
      Github:{" "}
      <a href="https://github.com/bgilbreath" title="GitHub">
        https://github.com/bgilbreath
      </a>
      <br></br>Email:{" "}
      <a href="mailto: bobbygilbreath@gmail.com" title="Email">
        bobbygilbreath@gmail.com
      </a>
      <br></br>
    </div>
  );
}
