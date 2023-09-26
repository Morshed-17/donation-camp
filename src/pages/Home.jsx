import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  const [search, setSearch] = useState('')

  const getData = (data) => {
    setSearch(data)
  }
  
  return (
    <div>
      <Banner onSubmit={getData}/>

      <Cards cards={cards}  search={search}/>
    </div>
  );
};

export default Home;
