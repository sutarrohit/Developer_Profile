import Header from "./Components/Header/Header";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeComponent />
      <Projects />
      <About />
    </div>
  );
}
