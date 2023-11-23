import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { validation } from "../utils/SignupValidation";
import { ToastContainer, toast } from 'react-toastify';



const Register = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const handlechange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setUser((curr) => {
            return { ...curr, [field]: value }
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        setErrors(validation(user))

        if (errors.username === "" && errors.email === "" && errors.password === "") {
            const { username, email, password } = user;

            axios.post("https://fitness-guru-server.vercel.app/register", { username, email, password })
                .then(res => {
                    toast.success('User registered successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    navigate('/login')
                })
                .catch(err => {
                    toast.error('something went wrong!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })

            setUser({ username: "", email: "", password: "" })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 text-gray-100 font-inter">
            <div className="absolute top-[30px]  text-29xl tracking-[-0.08em] font-bruno-ace text-white flex items-center justify-center w-[618px] h-[117px]">
                FITNESS GURU
            </div>
            <div className="absolute top-[160px]  w-[300px] h-[69px] flex flex-col items-center justify-start text-[30px] text-white font-space-grotesk">
                <div className="relative tracking-[-0.08em] font-medium flex items-center justify-center w-[509px]">
                    Make a new Account
                </div>
            </div>

            <div className="w-full max-w-md">
                <form className="mt-8">
                    <div className="absolute top-[210px] w-[440px] flex flex-col items-center justify-start text-left">
                        <div className="rounded-lg mb-[25px] bg-gray-200 w-full h-[65px] flex flex-col items-start justify-start">
                            <input className="bg-gray-200 text-[15px] text-white py-3 px-5 rounded-lg w-[90%] h-[55%] min-w-[180px] focus:outline-none focus:border-transparent"
                                placeholder="Enter Username"
                                name="username"
                                value={user.username}
                                onChange={handlechange}
                            >
                            </input>
                            {errors.username && <span className="text-danger">{errors.username}</span>}
                        </div>
                        <div className="rounded-lg mb-[25px] bg-gray-200 w-full h-[65px] flex flex-col items-start justify-start">
                            <input className="bg-gray-200 text-[15px] text-white py-3 px-5 rounded-lg w-[90%] h-[55%] min-w-[180px] focus:outline-none focus:border-transparent"
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={user.email}
                                onChange={handlechange}
                            >
                            </input>
                            {errors.email && <span className="text-danger">{errors.email}</span>}

                        </div>
                        <div className="rounded-lg mb-[25px] bg-gray-200 w-full h-[65px] flex flex-col items-start justify-start">
                            <input className="bg-gray-200 text-[15px] text-white py-3 px-5 rounded-lg w-[90%] h-[55%] min-w-[180px] focus:outline-none focus:border-transparent"
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                value={user.password}
                                onChange={handlechange}
                            >
                            </input>
                            {errors.password && <span className="text-danger">{errors.password}</span>}

                        </div>
                        <div className="flex flex-row justify-start items-start rounded-lg mb-[10px] [background:linear-gradient(90deg,_#a9a5fd,_#ebd75d)] w-full h-[65px] overflow-hidden shrink-0 flex flex-row py-0 px-8 box-border items-center justify-between">
                            <button onClick={handlesubmit} className="relative font-bold h-full w-full text-[24px] tracking-[0.5px] leading-[24px] text-left [background:linear-gradient(90deg,_#a9a5fd,_#ebd75d)]">
                                Register
                                <img
                                    className="relative w-[27.02px] h-[21.89px] ml-[220px]"
                                    alt=""
                                    src="/arrow.svg"
                                />
                            </button>

                        </div>
                        <div className="  text-[15px] text-left inline-block w-[445px] h-[37px]">
                            <span className="font-light">{`have an account ? `}</span>
                            <Link className="font-semibold text-white no-underline" to="/login">Login!</Link>

                        </div>
                    </div>
                </form>

                <div className="absolute bottom-3 w-[1440px] flex flex-row py-0 px-[70px] box-border items-start justify-between">
                    <div className="relative tracking-[-0.08em]">Privacy Policy</div>
                    <div className="relative tracking-[-0.08em]">Copyright@aaaa 2023</div>
                </div>
                <ToastContainer className="w-[450px] h-[50px] text-[20px]" />


            </div>
        </div>
    );
};

export default Register;
