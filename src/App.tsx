import "./App.css";
import { About } from "./templates/about/About";
import { Cover } from "./templates/cover/Cover";
import { Members } from "./templates/members/Members";

function App() {
  return (
    <div>
      <Cover />
      <About />
      <Members />
    </div>
  );
}

export default App;
