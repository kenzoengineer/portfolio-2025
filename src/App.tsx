import { createContext } from "react";
import Glance from "./Glance/Glance";
import Hero from "./Hero/Hero";
import { useWindowDimension } from "./hooks";
import Skills from "./Skills/Skills";
import Career from "./Career/Career";

interface WindowDims {
  windowWidth: number;
  windowHeight: number;
}

export const WindowContext = createContext<WindowDims>({
  windowHeight: 0,
  windowWidth: 0,
});

function App() {
  let [windowWidth, windowHeight] = useWindowDimension();
  return (
    <div className="">
      <WindowContext.Provider value={{ windowWidth, windowHeight }}>
        <div className="bg-b-red text-b-white py-2 text-center md:hidden">
          This website is best on{" "}
          <span className="font-bold">large screens</span>
        </div>
        <Hero />
        <Glance />
        <Skills />
        <Career />
      </WindowContext.Provider>
    </div>
  );
}

export default App;
