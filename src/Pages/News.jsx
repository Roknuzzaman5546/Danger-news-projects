import { Link } from "react-router-dom";

const News = ({ anews }) => {
    const { _id, title, image_url, details } = anews;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mb-2">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body border-b-2">
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <br /> <Link className=" text-blue-500 font-bold" to={`/news/${_id}`}>Read more..</Link></p>
                            :
                            <p>{details}</p>
                    }
    
                </div>
                <div className="my-4 ml-2">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;