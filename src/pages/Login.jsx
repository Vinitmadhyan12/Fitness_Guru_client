import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { validation } from "../utils/LoginValidation";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React from "react";


const Login = ({ setCurrUser, setToken }) => {
    const [user, setUser] = useState({ username: "", password: "" });
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

        if (errors.username === "" && errors.password === "") {
            const { username, password } = user;

            axios.post("http://localhost:3000/login", { username, password })
                .then(res => {
                    // console.log(res.data)
                    const { token, user } = res.data;
                    setCurrUser(user)
                    localStorage.setItem('token', token);
                    setToken(token);
                    console.log(token);
                    navigate('/')
                })
                .catch(err => {
                    // console.log(err)

                    toast.error('Incorrect password or username', {
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

            setUser({ username: "", password: "" })
        }
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 text-gray-100 font-inter">
            {/* ...existing code */}
            <div className=" flex justify-center bg-gray-400 w-full h-[633px] overflow-hidden text-center text-lg text-gray-100 font-inter">
                <div className="absolute top-[30px]  text-29xl tracking-[-0.08em] font-bruno-ace text-white flex items-center justify-center w-[618px] h-[117px]">
                    FITNESS GURU
                </div>
                <div className="absolute top-[150px]  w-[300px] h-[69px] flex flex-col items-center justify-start text-[30px] text-white font-space-grotesk">
                    <div className="relative tracking-[-0.08em] font-medium flex items-center justify-center w-[509px]">
                        Login to Your Account
                    </div>
                </div>




                <div className="w-full max-w-md">
                    <form className="mt-8">
                        <div className="absolute top-[220px] w-[440px] flex flex-col items-center justify-start text-left">

                            <div className="rounded-lg mb-[25px] bg-gray-200 w-full h-[65px] flex flex-col items-start justify-start">
                                <input className="bg-gray-200 text-[15px] text-white py-3 px-5 rounded-lg w-[90%] h-[55%] min-w-[180px] focus:outline-none focus:border-transparent"
                                    placeholder="Enter Username"
                                    data-testid="username"
                                    name="username"
                                    value={user.username}
                                    onChange={handlechange}
                                >
                                </input>
                                {errors.username && <span className="text-danger">{errors.username}</span>}
                            </div>
                            <div className="rounded-lg mb-[25px] bg-gray-200 w-full h-[65px] flex flex-col items-start justify-start">
                                <input className="bg-gray-200 text-[15px] text-white py-3 px-5 rounded-lg w-[90%] h-[55%] min-w-[180px] focus:outline-none focus:border-transparent"
                                    type="password"
                                    placeholder="Enter Password"
                                    data-testid="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handlechange}
                                >
                                </input>
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>
                            <div className="flex flex-row justify-start items-start rounded-lg mb-[10px] [background:linear-gradient(90deg,_#a9a5fd,_#ebd75d)] w-full h-[65px] overflow-hidden shrink-0 flex flex-row py-0 px-8 box-border items-center justify-between">
                                <button onClick={handlesubmit} data-testid="subinfo" className="relative font-bold h-full w-full text-[20px] tracking-[0.5px] leading-[24px] text-left [background:linear-gradient(90deg,_#a9a5fd,_#ebd75d)]">
                                    Login to Your Account
                                    <img
                                        className="relative w-[27.02px] h-[21.89px] ml-[109px]"
                                        alt=""
                                        src="/arrow.svg"
                                    />
                                </button>

                            </div>

                            <div className="  text-[15px] text-left inline-block w-[445px] h-[37px]">
                                <span className="font-light">{`Don't have an account yet? `}</span>
                                <Link className="font-semibold text-white no-underline" to="/register">Register now!</Link>

                            </div>
                            <GoogleOAuthProvider clientId="592966766332-m11k59q85jet883tt40rc6g64medm1g6.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        var decoded = jwt_decode(credentialResponse.credential);
                                        console.log(decoded.email);

                                        var email = decoded.email
                                        var name = decoded.given_name
                                        var family = decoded.family_name


                                        if (email) {
                                            axios.post("http://localhost:3000/logi", { email, name, family })
                                                .then(res => {
                                                    setCurrUser(res.data)
                                                    console.log(res.data)

                                                    navigate('/')
                                                })
                                                .catch(err => {
                                                    // console.log(err)
                                                })

                                        }
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </GoogleOAuthProvider>
                        </div>
                    </form>


                    <div className="absolute bottom-3 w-[1440px] flex flex-row py-0 px-[70px] box-border items-start justify-between">
                        <div className="relative tracking-[-0.08em]">Privacy Policy</div>
                        <div className="relative tracking-[-0.08em]">Copyright@aaaa 2023</div>
                    </div>
                    <ToastContainer className="w-[450px] h-[50px] text-[20px]" />

                </div>
            </div>
        </div >
    );
};

export default Login;
