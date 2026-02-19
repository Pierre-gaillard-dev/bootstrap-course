import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Restaurants from "./components/Restaurants";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specialties />
      <Restaurants />
    </>
  );
};

export default App;
