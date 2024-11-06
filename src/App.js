import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsList from "./components/CardsList";
import Cta from "./components/Cta"
import Subheading from "./components/Subheading";
import Working from "./components/Working"
import Team from "./components/Team";
import Slider from './components/Slider';
import Contuctus from "./components/Contactus"


function App() {
  return (
    <div className="wrapper">
      <Header />
      <CardsList />
      <Cta />
      <Subheading />
      <Working />
      <Team />
      <Slider />
      <Contuctus />
      <Footer />
      
    </div>
  );
}

export default App;
