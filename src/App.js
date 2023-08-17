import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Startups } from "./components/Services/Startups/Startups";
import { Investors } from "./components/Services/Investors/Investors";
import { Mentorships } from "./components/Services/Mentorships/Mentorships";
import { Resources } from "./components/Enable/Resources/Resources";
import { E4GCommunity } from "./components/Enable/E4GCommunity/E4GCommunity";
import { Contact } from "./components/Contact/Contact";
import { BusinessTools } from "./components/BusinessTools/BusinessTools";
import { Signup } from "./components/SignUp/Signup";
import { Login } from "./components/Login/Login";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);
  return (
    <div className={`App ${theme}`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/mentorships" element={<Mentorships />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/e4gcommunity" element={<E4GCommunity />} />
          <Route path="/businesstools" element={<BusinessTools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
