import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    category,
    category_bg,
    card_bg,
    text_color,
    campaign_title,
    price,
    description,
    image_url,
  } = card;
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/donate/${id}`)
  }
  return (
    

    <div onClick={handleCardClick} className={`rounded-lg overflow-hidden ${card_bg} cursor-pointer`}>
        {/* <div className="bg-blue-500 bg-red-500 bg-green-500 bg-orange-500 bg-opacity-25 bg-opacity-75 text-blue-500 text-red-500 text-green-500 text-orange-500"></div> */}
      <img className="h-[194px] w-full object-cover" src={image_url} alt="" />
      <div className="p-4 ">
        <p className={`font-medium block max-w-fit mb-2 py-1 px-2 rounded-md ${text_color[0]} ${category_bg}`}>
          {category}
        </p>
        <h4 className={`text-xl font-semibold ${text_color[0]}`} >{campaign_title}</h4>
      </div>
    </div>
  );
};

export default Card;
