import "./style.css";
import NavBar from "./sections/nav-bar";
import Home from "./sections/home";
import AboutMe from "./sections/about-me";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <body>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />

      <Footer />
    </body>
  );
}

export default App;
