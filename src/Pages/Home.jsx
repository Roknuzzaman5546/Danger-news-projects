import Header from "../Shared/Header/header";
import LeftsiteaNav from "../Shared/Nav/LeftsiteaNav";
import RightsideNav from "../Shared/Nav/RightsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Breakingnwes from "./Breakingnwes";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakingnwes></Breakingnwes>
            <Navbar></Navbar>
            <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
                <div className="">
                    <LeftsiteaNav></LeftsiteaNav>
                </div>
                <div className=" col-span-2">
                    <h2 className="text-2xl font-bold">Dragon News Home</h2>
                </div>
                <div className="">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;