import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import side1 from '../../assets/qZone1.png'
import side2 from '../../assets/qZone2.png'
import side3 from '../../assets/qZone3.png'
const RightsideNav = () => {
    return (
        <div>
            <div className=' mb-4'>
                <h3 className=" text-2xl font-semibold mb-2">Log in with</h3>
                    <button className="btn btn-outline btn-primary w-full mb-1">
                        <FaGoogle></FaGoogle>
                        Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub></FaGithub>
                        Github
                    </button>
            </div>
            <div className=' mb-4'>
                <h3 className=" text-xl mb-2 font-semibold">Find with us</h3>
                <a href="" className=' flex gap-2 items-center rounded-t-lg border p-2 text-xl'>
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className=' flex gap-2 items-center border-x p-2 text-xl'>
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className=' flex gap-2 items-center rounded-b-lg border p-2 text-xl'>
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a> 
            </div>
            <div className=' bg-slate-100 p-2 rounded-md'>
                <h3 className=" font-semibold text-xl mb-2">Q-Zone</h3>
                <img src={side1} alt="" />
                <img src={side2} alt="" />
                <img src={side3} alt="" />
            </div>
        </div>
    );
};

export default RightsideNav;