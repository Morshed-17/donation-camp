import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  
  return (
    <div>
      <Banner />

      <Cards cards={cards}  />
    </div>
  );
};

export default Home;
