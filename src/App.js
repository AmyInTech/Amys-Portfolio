import "./style.css";
import NavBar from "./sections/nav-bar";
import Home from "./sections/home";
import AboutMe from "./sections/about-me";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";

function App() {
  return (
    <body>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
    </body>
  );
}

export default App;
