import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchExercise from "../components/SearchExercise";
import MuscleSection from "../components/MuscleSection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trainer from "../components/Trainer";
import axios from "axios";
import { useEffect } from "react";

const LandingPage = ({ exercises, setExercises, setSelectedmuscle, setSearchExercises, currUser, setCurrUser, setValue, setToken, token }) => {

    setToken(localStorage.getItem('token') || '')

    useEffect(() => {
        if (token) {
            verifyToken();
        }
    }, [token]);

    const verifyToken = async () => {
        try {
            const response = await axios.get('http://localhost:3000/protected', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Token is valid');
            // console.log(response.data);
            const { user } = response.data;
            setCurrUser(user);
        } catch (error) {
            console.error('Token verification failed', error);
            localStorage.removeItem('token'); // Remove token from local storage if it's invalid
            setToken('');
        }
    };


    return (
        <main className="w-full  min-h-screen flex flex-col items-center justify-center text-center text-29xl text-white font-bruno-ace">

            <div className=" flex w-full flex-col py-[22px] px-20 box-border items-center justify-center gap-[50px] bg-[url(/public/main.jpg)] bg-cover bg-no-repeat bg-[top] w-full top-[0] z-[2] text-center text-[80px] text-white font-radio-canada lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
                <Navbar currUser={currUser} setCurrUser={setCurrUser} check={"home"} setToken={setToken} />

                <div className=" w-full flex flex-col py-[120px] px-[30px] items-center justify-start">
                    <div className=" flex w-full flex-col items-center justify-center gap-[62px] max-w-[95%px]">
                        <div className=" flex flex-col items-center justify-start gap-[30px] md:max-w-full">
                            <div className=" relative text-[55px] leading-[50px] font-semibold">
                                Unleash the Beast INSIDE!!
                            </div>
                            <div className=" relative text-[35px] leading-[30px] font-puritan">
                                Your journey to perfect body begins here!!
                            </div>
                        </div>


                        <SearchExercise exercises={exercises} setExercises={setExercises} setSearchExercises={setSearchExercises} setValue={setValue} />
                    </div>
                </div>

            </div>


            <div className="bg-gray-200 w-full pt-[70px] font-dosis text-red">
                What Do You Wanna Train Today?
            </div>

            <div>
                <MuscleSection setSelectedmuscle={setSelectedmuscle} />
            </div>
            {/* <div>
                <Trainer currUser={currUser} />
            </div> */}
            <ToastContainer className="w-[450px] h-[50px] text-[20px]" />



            <Footer />
        </main >


    );
};

export default LandingPage;



