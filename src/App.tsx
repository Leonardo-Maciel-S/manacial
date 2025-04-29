import "./App.css";
import { About } from "./templates/about/About";
import { Contact } from "./templates/contact/Contact";
import { Cover } from "./templates/cover/Cover";
import { Footer } from "./templates/footer/Footer";
import { Gallery } from "./templates/gallery/Gallery";
import { Members } from "./templates/members/Members";

function App() {
  return (
    <div>
      <Cover />
      <About />
      <Members />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
