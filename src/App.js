import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
   <NavBar />
   <Home />
   <About />
   <Portfolio/>
   <Tools />
   <Contact />
   <SocialLinks />
   </div>
  );
} 

export default App;
