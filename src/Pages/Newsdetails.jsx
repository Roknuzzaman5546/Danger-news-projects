import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/header";
import RightsideNav from "../Shared/Nav/RightsideNav";
import Navbar from "../Shared/Navbar/Navbar";

const Newsdetails = () => {
    const news = useLoaderData();
    const { id } = useParams();

    console.log(news)
    console.log(id)
    const newNews = news.find(khobor => khobor._id == id)
    console.log(newNews)


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid md:grid-cols-4 gap-4">
                <div className=" col-span-3">
                    <h3 className=" text-2xl font-bold mb-3">Dragon news</h3>
                    <div className=" space-y-2">
                        <img src={newNews.image_url} alt="" />
                        <p className=" text-2xl font-bold">{newNews.title}</p>
                        <p>{newNews.details}</p>
                        <button className=" bg-orange-700 px-8 py-3"><Link to="/">All news in this category</Link></button>
                    </div>
                </div>
                <RightsideNav></RightsideNav>
            </div>
        </div>
    );
};

export default Newsdetails;