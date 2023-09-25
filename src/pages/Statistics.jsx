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
    const totalDonations = donations?.reduce(
      (accum, currentValue) => accum + currentValue.price,
      0
    );
    setTotal(totalDonations);
    const myTotalDonations = myDonations?.reduce(
      (accum, currentValue) => accum + currentValue.price,
      0
    );
    setMyTotal(myTotalDonations);
  }, []);





  const donationsPercent = (100* total) / (total + myTotal)
  const myDonationsPercent = (100* myTotal) / (total + myTotal)
  const data = [
    { key: "Donatinos", value: donationsPercent },
    { key: "Your Donations", value: myDonationsPercent },
  ];
  const COLORS =['#e3a51a ', '#aaac84']


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
    <div className="text- font-semibold flex justify-center items-center h-[70vh]">
      <ResponsiveContainer width="100%" height="100%">
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
