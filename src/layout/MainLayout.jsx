import { Outlet } from "react-router-dom";
import '../index.css'
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="font-family-inter">
            <Header/>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;