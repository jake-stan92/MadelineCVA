/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import placeholder from "./assets/placeholder.svg";
// import quotation from "./assets/quotation.png";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="section">
        <h3>
          CONTENT DESIGNED WITH DEEPER INTENTIONS AND INSPIRED BY YOUR{" "}
          <span className="cursive">Unique </span>
          BUSINESS
        </h3>
        <img className="placeholderIMG" src={placeholder}></img>
        <button className="homePage-button">
          <a href="/services">Services</a>
        </button>
      </div>
      <div className="section quote-section">
        <p className="quote">
          Collaboration and creative assistance result in gifting you more -
          time that you can spend living your life, growing your business and
          doing what you do time <span className="cursive">best</span>.
        </p>
        {/* <img id="quotationIMG" src={quotation}></img> */}
        <p id="quotation-mark">"</p>
      </div>
      <div className="section">
        <p>img here</p>
        <p>MEET MADELINE</p>
        <button className="homePage-button">
          <a href="/about">About Me</a>
        </button>
      </div>
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
