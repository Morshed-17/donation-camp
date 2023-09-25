import { Link } from "react-router-dom";
import swal from "sweetalert";

const DonationCard = ({ donate }) => {
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
  } = donate;
  return (
    <div
      className={`rounded-lg overflow-hidden ${card_bg} cursor-pointer flex flex-col md:flex-row`}
    >
      {/* <div className="bg-blue-500 bg-red-500 bg-green-500 bg-orange-500 bg-opacity-25 bg-opacity-75 text-blue-500 text-red-500 text-green-500 text-orange-500"></div> */}
      <img className="w-full md:w-[220px] object-cover " src={image_url} alt="" />
      <div className="p-4 ">
        <p
          className={`font-medium block max-w-fit mb-2 py-1 px-2 rounded-md ${text_color[0]} ${category_bg}`}
        >
          {category}
        </p>
        <h4 className={`text-xl font-semibold`}>
          {campaign_title}
        </h4>
        <p className={`${text_color[0]} font-bold`}>${price}</p>
        <Link to={`/donate/${id}`}>
        <button className={` ${text_color[1]} text-white px-6 border-[0px] py-2 font-bold rounded-lg hover:scale-95 duration-200 mt-3`}>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
