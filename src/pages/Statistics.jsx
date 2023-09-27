import { useLoaderData } from "react-router-dom";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";


const Statistics = () => {
  const myDonations = JSON.parse(localStorage.getItem("donations"));
  const donations = useLoaderData();
  const [total, setTotal] = useState(0);
  const [myTotal, setMyTotal] = useState(0);

  useEffect(() => {
    const totalDonations = donations.length
    ;
    setTotal(totalDonations);
    const myTotalDonations = myDonations?.length || 0
    setMyTotal(myTotalDonations);
  }, []);





  const donationsPercent = 100 - (myTotal / total) *100
  const myDonationsPercent = (myTotal / total) *100
  const data = [
    { key: "Total Donations", value: donationsPercent },
    { key: "Your Donations", value: myDonationsPercent },
  ];
  const COLORS =['#FF444A ', '#00C49F']


  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (

    <div className="text- font-semibold flex flex-col justify-center items-center h-[60vh]">
     <div>
     <ResponsiveContainer width={600} height={400}>
        <PieChart width={400} height={400}>
          <Pie 
            data={data}
            dataKey="value"
            nameKey="key"
            labelLine={false}
            label= {renderCustomizedLabel}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#aaac84"
          >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>
          <Tooltip />
          
        </PieChart>
        
      </ResponsiveContainer>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="flex items-center gap-2" >
          <p>Your Donation</p>
          <div className="bg-[#00C49F] h-2 w-16 rounded-sm">

          </div>
        </div>
        <div className=" flex items-center gap-2">
          <p>Total Donation</p>
          <div className="bg-[#FF444A] h-2 w-16 rounded-sm"></div>
        </div>
        </div>
      </div>
     </div>
      
    
    </div>
  );
};

export default Statistics;
