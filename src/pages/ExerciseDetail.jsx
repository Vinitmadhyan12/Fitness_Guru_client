import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function ExerciseDetail({ setExercises, exercises, currUser, setCurrUser, setToken }) {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:3000/getExercises')
            .then(res => setExercises(res.data))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const fetchExercisesData = async () => {
            const ExerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            // const exerciseDetailData = await fetchData(`${ExerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            // setExerciseDetail(exerciseDetailData);
            // // console.log(exerciseDetailData)

            const exerciseDetailData = await exercises.filter((exercise) => exercise._id === id);
            setExerciseDetail(exerciseDetailData[0]);
            // console.log(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData[0].name} exercise`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            // console.log(exerciseVideosData)

        }
        fetchExercisesData();



    }, [id])

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });

    //     axios.post('http://localhost:3000/exerciseDetail', { id })
    //         .then(Detail => {
    //             console.log(Detail.data)
    //             setExerciseVideos(Detail.data.exerciseVideosData.contents);
    //             setExerciseDetail(Detail.data.exerciseDetailData);

    //         })
    //         .catch(err => console.log(err))

    // }, [id])



    return (

        <div className="bg-gray-200  min-h-screen">
            <Navbar currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />
            <div className="self-stretch relative bg-dimgray h-[5px] overflow-hidden shrink-0" />
            <Detail exerciseDetail={exerciseDetail} currUser={currUser} id={id} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises />
            <Footer />
        </div>
    );
}



