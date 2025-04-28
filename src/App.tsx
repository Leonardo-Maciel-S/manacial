import "./App.css";
import { About } from "./templates/about/About";
import { Cover } from "./templates/cover/Cover";
import { Gallery } from "./templates/gallery/Gallery";
import { Members } from "./templates/members/Members";

function App() {
  return (
    <div>
      <Cover />
      <About />
      <Members />
      <Gallery />
    </div>
  );
}

export default App;
