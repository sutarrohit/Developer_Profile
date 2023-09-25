import Header from "./Components/Header/Header";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeComponent />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}
