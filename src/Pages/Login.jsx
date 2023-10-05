import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const Login = () => {
    const { login } = useContext(Authcontext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        login(email, password)
            .then(result => {
                console.log("logged in sucessfully", result)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Dont’t Have An Account?  <Link className=" text-blue-600 font-bold" to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;