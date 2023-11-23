import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { googleLogout } from '@react-oauth/google';

export default function Navbar({ currUser, setCurrUser, check, setToken }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (currUser.hash) {
            axios
                .get('https://fitness-guru-server.vercel.app/logout')
                .then((res) => {
                    setCurrUser({});
                    localStorage.removeItem('token');
                    setToken('');
                    toast.success('Logout Successful', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    });
                })
                .catch((err) => alert('not possible'));
        } else {
            setCurrUser({});
            googleLogout();
        }

    };

    return (
        <div className={check ? 'w-full' : 'w-full bg-gray-200'}>
            <div className="p-[15px] w-full flex flex-row items-center justify-between sm:flex">
                <Link
                    className="mx-[20px] flex tracking-[-0.08em] text-[40px] flex items-center font-bruno-ace text-white no-underline"
                    to="/"
                >
                    FITNESS GURU
                </Link>

                <div className="flex flex-row items-start justify-start gap-[20px] mx-[30px] text-center text-[25px] font-jaldi">
                    <Link className="flex leading-[22px] text-white no-underline" to="/">
                        HOME
                    </Link>
                    {!currUser._id && (
                        <Link className="flex leading-[22px] text-white no-underline" to="/register">
                            SIGN UP
                        </Link>
                    )}
                    {!currUser._id && (
                        <Link className="flex leading-[22px] text-white no-underline" to="/login">
                            LOGIN
                        </Link>
                    )}
                    {currUser._id && (
                        <Link className="flex leading-[22px] text-white no-underline" to="/" onClick={handleLogout}>
                            LOGOUT
                        </Link>
                    )}
                    <Link
                        className="flex leading-[22px] text-white no-underline"
                        to={currUser._id ? `/profile/${currUser._id}` : '/login'}
                    >
                        {currUser._id ? `${currUser.username}` : 'profile'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
