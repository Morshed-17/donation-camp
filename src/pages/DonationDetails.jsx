import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id == id);
  const {
    category,
    category_bg,
    card_bg,
    text_color,
    campaign_title,
    price,
    description,
    image_url,
  } = donation;
  
  const handleAddToDonation = () => {
    const addToDonationArray = []
    const donations = JSON.parse(localStorage.getItem('donations'))
    
    if(!donations) {
      addToDonationArray.push(donation)
      localStorage.setItem('donations', JSON.stringify(addToDonationArray))
      swal("Good job!", "Successfuly donated!", "success");
    }else{
      const isExist = donations.find(donation => donation.id == id)

      if(!isExist){
        addToDonationArray.push(...donations, donation)
        localStorage.setItem('donations', JSON.stringify(addToDonationArray))
        swal("Good job!", "Successfuly donated!", "success");
      }else{
        swal("Error", "You have already donated!", "error");
      }
      
    }
    
  }

  return (
    <div className="my-12 max-w-[1320px] mx-auto px-5 md:px-[40px]">
     {/* <div className="bg-blue-500 bg-red-500 bg-green-500 bg-orange-500 bg-opacity-25 bg-opacity-75 text-blue-500 text-red-500 text-green-500 text-orange-500"></div> */}
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className=" mx-auto h-[550px] bg-cover items-end rounded-lg overflow-hidden flex"
      >
        <div className="bg-black py-12 px-6 bg-opacity-60 w-full">
          <button onClick={handleAddToDonation} className={` ${text_color[1]} text-white px-12 border-[0px] py-3 rounded-lg hover:scale-95 duration-200`}>
            {`Donate $${price}`}
          </button>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-4xl font-bold mb-4">{campaign_title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
