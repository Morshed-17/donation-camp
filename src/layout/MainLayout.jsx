import { Outlet } from "react-router-dom";
import '../index.css'
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="font-family-inter">
            <Header/>
            <div className="max-w-[1320px] px-[40px] mx-auto">
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;