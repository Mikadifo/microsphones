import "./App.css";
import Hero from "./components/hero";
import HeroBottom from "./components/heroBottom";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import ModelViewer from "./components/ModelViewer";
import RightSection from "./components/rightSection";

const App = () => {
  return (
    <>
      <ModelViewer />
      <Hero />
      <RightSection />
      <MiddleSection />
      <LeftSection />
      <HeroBottom />
    </>
  );
};

export default App;
