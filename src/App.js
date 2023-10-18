import "./style.css";
import NavBar from "./sections/nav-bar";
import Home from "./sections/home";
import AboutMe from "./sections/about-me";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <body>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
