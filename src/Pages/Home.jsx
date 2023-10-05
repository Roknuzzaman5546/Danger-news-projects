import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/header";
import LeftsiteaNav from "../Shared/Nav/LeftsiteaNav";
import RightsideNav from "../Shared/Nav/RightsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Breakingnwes from "./Breakingnwes";
import News from "./News";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
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
                    {
                        news.map(anews => <News
                            key={anews.id} 
                            anews={anews}
                        ></News>)
                    }
                </div>
                <div className="">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;