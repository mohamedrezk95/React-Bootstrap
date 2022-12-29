import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Deals } from "./components/Deals/Deals";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { Media } from "./components/Media/Media";
import Navigation from "./components/Navigation/Navigation";
import { News } from "./components/News/News";
import { Offers } from "./components/Offers/Offers";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Gallery />
      <Products />
      <News />
      <Offers />
      <Deals />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
