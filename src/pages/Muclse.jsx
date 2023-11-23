import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Menu, Dropdown, Button } from "antd";
import SearchExercise from "../components/SearchExercise";
import { useEffect, useState } from "react";
import ExerciseSection from "../components/ExerciseSection";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { fetchData, exerciseOptions } from "../utils/fetchData";
// import { fetchData, exerciseOptions } from "../utils/fetchData";

const Muscle = ({ exercises, setExercises, selectedmuscle, setSearchExercises, currUser, setCurrUser, setValue, setToken }) => {
    const [variations, setVariations] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesperpage = 12;

    const indexoflast = currentPage * exercisesperpage
    const indexoffirst = indexoflast - exercisesperpage

    const currexercises = variations.slice(indexoffirst, indexoflast)

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 700, behavior: "smooth" })

    }

    // useEffect(() => {
    //     const ExerciseData = async () => {
    //         const Allexercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    //         setExercises(Allexercises);
    //     }
    //     ExerciseData();
    // })
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });



        if (selectedmuscle === "all") {
            setVariations(exercises)


        } else {
            const data = exercises.filter((exercise) => exercise.bodyPart.toLowerCase() === selectedmuscle)
            setVariations(data);

        }

    }, [])



    return (
        <main className=" flex flex-col  min-h-screen items-center justify-start text-center text-[100px] text-white font-bruno-ace">
            <Navbar currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />
            <div className="self-stretch relative bg-dimgray h-[5px] overflow-hidden shrink-0" />
            <div className="self-stretch bg-gray-400 flex flex-col py-[40px] px-[100px] items-center justify-center gap-[70px]">
                <div className="self-stretch rounded-31xl h-[400px] overflow-hidden shrink-0 flex flex-col py-[105px] px-[74px] box-border items-center justify-center bg-[url('/public/frame-10.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="relative tracking-[-0.08em] text-[70px]">{selectedmuscle} Exercises</div>
                </div>

                <SearchExercise exercises={exercises} setExercises={setExercises} setVariations={setVariations} setSearchExercises={setSearchExercises} setValue={setValue} />
                {/* <div className="self-stretch flex flex-row flex-wrap py-0 px-3 box-border items-center justify-center gap-[30px] max-w-[95%px] text-29xl text-darkslategray font-doppio-one"> */}

                <Stack direction="row" className="bg-zinc-600" sx={{ gap: { lg: '50px', xs: "30px" }, py: "50px", borderRadius: "35px" }} flexWrap="wrap" justifyContent="center" >
                    {currexercises.map((variation, id) => {
                        return <ExerciseSection variation={variation} key={id} />
                    })}

                    <div className="block  font-bold  w-[500px] h-[80px] rounded-xl flex flex-row justify-center align-center items-center" >
                        {variations.length > 12 && (
                            <Pagination
                                color="primary"
                                shape="rounded"
                                text="white"
                                defaultPage={1}
                                count={Math.ceil(variations.length / exercisesperpage)}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </div>
                </Stack>




            </div>
            <Footer />
        </main>
    );
};

export default Muscle;
