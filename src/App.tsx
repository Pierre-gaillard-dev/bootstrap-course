import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Restaurants from "./components/Restaurants";
import Comments from "./components/Comments";
import Map from "./components/Map";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specialties />
      <Restaurants />
      <Comments />
      <Map />
      <Footer />
    </>
  );
};

export default App;
