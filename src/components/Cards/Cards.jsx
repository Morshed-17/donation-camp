import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ cards, search }) => {

  return (
    <div className="my-24 max-w-[1320px] px-5 md:px-[40px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {
            cards.filter((card => {
                return search === '' ? card : card.category.toLowerCase().includes(search.toLowerCase())
            })).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
