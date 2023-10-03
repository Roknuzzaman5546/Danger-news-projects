import Marquee from "react-fast-marquee";
const Breakingnwes = () => {
    return (
        <div>
            <div className=" bg-gray-100 rounded-sm p-2 flex my-5">
                <button className=" py-4 px-6 font-bold btn-secondary">News</button>
                <Marquee speed={150} pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default Breakingnwes;