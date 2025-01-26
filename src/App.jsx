import { Codered } from "./components/Codered";
import { Connect } from "./components/Connect";
import { Herosection } from "./components/Herosection";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";

export const App = () => {
  return (
    <>
      <Navbar />
      <Codered />
      <Herosection />
      <Stats />
      <Connect />
    </>
  );
};
