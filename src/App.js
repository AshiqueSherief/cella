import "./App.css";
import FeatureList from "./Compounents/FeatureList";
import Features from "./Compounents/Features";
import Footer from "./Compounents/Footer";
import Header from "./Compounents/Header";
import Poster from "./Compounents/Poster";
import Products from "./Compounents/Products";
import Test from "./Compounents/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <Poster />
      <Products />
      <Features />
      <FeatureList />
      <Footer />
      {/* <Test /> */}
    </div>
  );
}

export default App;
