import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard/DonationCard";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [isFound, setIsFound] = useState("");
  const [isShow, setIsShow] = useState(false)
  const donations = JSON.parse(localStorage.getItem("donations"));

  useEffect(() => {
    if (donations) {
      setDonates(donations);
    } else {
      setIsFound("No data Found");
    }
  }, []);

  return <div className="my-24 max-w-[1320px] px-5 md:px-[40px] mx-auto">
  
  
   <div>
    {
      isFound? 
      <p className="h-[70vh] flex justify-center items-center">No data Found</p>
      :
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {   
        isShow? donates?.map(donate => <DonationCard key={donate.id} donate={donate}/>)
        :
        donates?.slice(0,4).map(donate => <DonationCard key={donate.id} donate={donate}/>)
        
    }
    </div>
    }
   
  </div>
  <button onClick={()=> setIsShow(!isShow)}  className={`bg-red-500 ${5 > donates.length && 'hidden'} text-white px-6 border-[0px] py-2 font-bold rounded-lg block mx-auto hover:scale-95 duration-200 mt-3`}>{
    isShow? 
    "Show Less"
    :
    "Show More"

  }</button>
  </div>;
};

export default Donation;
