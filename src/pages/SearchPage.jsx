import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchExercise from "../components/SearchExercise";
import ExerciseSection from "../components/ExerciseSection";
import { Stack, Typography } from "@mui/material";

const SearchPage = ({ searchExercises, currUser, setCurrUser, value, setToken }) => {

    return (
        <main className=" flex flex-col min-h-screen items-center justify-start text-center text-[100px] text-white font-bruno-ace">
            <Navbar currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />
            <div className="self-stretch relative bg-dimgray h-[5px] overflow-hidden shrink-0" />
            <div className="bg-gray-200 w-full pt-[20px] text-[35px] font-dosis text-red">
                Results For "{value}"
            </div>
            <div className="self-stretch bg-gray-400 flex flex-col py-[100px] px-[100px] items-center justify-center gap-[70px]">

                {searchExercises.length > 0 ? <Stack direction="row" className="bg-zinc-600" sx={{ gap: { lg: '50px', xs: "30px" }, py: "50px", borderRadius: "35px" }} flexWrap="wrap" justifyContent="center" >
                    {searchExercises.map((variation, id) => {
                        return <ExerciseSection variation={variation} key={id} />
                    })}
                </Stack>

                    :
                    <Typography color="RED" fontFamily="dosis" fontSize="30px" paddingTop="20px" className="bg-gray-200 w-full  pt-[20px] text-[35px]  text-danger">
                        No Results Found
                    </Typography >
                }

            </div>
            <Footer />
        </main >
    );
};

export default SearchPage;
