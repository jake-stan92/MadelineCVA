import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="section">
        <h3>
          CONTENT DESIGNED WITH DEEPER INTENTIONS AND INSPIRED BY YOUR UNIQUE
          BUSINESS
        </h3>
        <p>img here</p>
        <button className="homePage-button">
          <a href="/services">services</a>
        </button>
      </div>
      <div className="section quote-section">
        <p>
          Collaboration and creative assistance result in gifting you more -
          time that you can spend living your life, growing your business and
          doing what you do time best.
        </p>
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
