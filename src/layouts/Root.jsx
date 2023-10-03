import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";


export default function Root() {
    return (
        <div className="font-poppins">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        
    )
}
