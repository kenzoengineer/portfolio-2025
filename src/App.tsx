import { createContext } from "react";
import Glance from "./Glance/Glance";
import Hero from "./Hero/Hero";
import { useWindowDimension } from "./hooks";

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
        <Hero />
        <Glance />
      </WindowContext.Provider>
    </div>
  );
}

export default App;
