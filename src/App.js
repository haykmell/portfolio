import React, { useState, useEffect } from "react";
import ParticlesStars from "./components/Particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import LatesWork from "./components/LatesWork";
import Skills from "./components/Skills";
import SelectedWork from "./components/SelectedWork";
import Contact from "./components/Contact";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [hamburger, setHamburger] = useState(false);
  const [selectedWork, setSelectedWork] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Navbar hamburger={hamburger} setHamburger={setHamburger} />

      <Router>
        <Switch>
          <Route path="/" exact>
            <ParticlesStars className="particles" />
            <Header />
            <Summary />
            <LatesWork
              selectedWork={selectedWork}
              setSelectedWork={setSelectedWork}
            />
            <Skills />
            <Contact />
            <Advantages />
          </Route>
          <Route path="/work">
            {selectedWork ? (
              <SelectedWork selectedWork={selectedWork} />
            ) : (
              <Redirect from="/work" to="/" />
            )}
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
