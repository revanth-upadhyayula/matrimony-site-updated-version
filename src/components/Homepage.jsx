import React, { useState, useEffect } from "react";

const Homepage = () => {
  const texts = ["Two Souls,"," One Destiny"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeTimeout = setTimeout(() => {
      setCurrentText((prev) => prev + texts[index][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100); // Typing speed

    if (charIndex === texts[index].length) {
      clearTimeout(typeTimeout);
      setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Pause before clearing
    }

    return () => clearTimeout(typeTimeout);
  }, [charIndex, index]);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo-container">
          <img src="./assets/logo2.png" className="logo img" alt="Logo" />
        </a>
        <nav className="navbar">
          <button id="Login">Log-In</button>
          <button id="connectButton">Get Started</button>
        </nav>
      </header>
      <section className="main-content">
        <div className="container">
          <div className="item item2">
            <div className="text">
              <h1 className="type"></h1>
              <p className="p">
                — unite through <b><span className="pink">Two</span><span className="blue">Halves</span></b>
              </p>
              <button>Get Started</button>
            </div>
          </div>
          <div className="item item3">
            <img src="./assets/light.jpg" className="main-photo" alt="Main" />
          </div>
        </div>
      </section>
      <section className="features">
        <div className="containers">
          <h2>Features</h2>
          <div className="feature-grid">
            {["Feature One", "Feature Two", "Feature Three"].map((feature, index) => (
              <div key={index} className="feature-item">
                <h3>{feature}</h3>
                <p>Description of {feature}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="containers">
          <h2>Testimonials</h2>
          <div className="testimonial-slider">
            {["This is an amazing platform!", "TwoHalves changed my approach.", "Highly recommended!"].map((quote, index) => (
              <div key={index} className="testimonial-item">
                <p>"{quote}"</p>
                <p><strong>- User {index + 1}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="containers">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
