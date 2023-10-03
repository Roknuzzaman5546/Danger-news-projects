import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsiteaNav = () => {
    const [categorys, setCateforys] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCateforys(data))
    },[])
    return (
        <div className=" p-1">
            <h2 className=" text-2xl font-bold mb-1">All Caterogy</h2>
            <h3 className=" bg-slate-200 rounded p-3 text-xl font-semibold mb-2 text-center">National News</h3>
            <div className="space-y-1 ml-8">
                {
                    categorys.map(category => <Link
                        to={`/catedory/${category.id}`}
                        className=" text-xl block" 
                        key={category.id}
                        >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftsiteaNav;