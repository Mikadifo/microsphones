import "./App.css";
import Hero from "./components/hero";
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
    </>
  );
};

export default App;
