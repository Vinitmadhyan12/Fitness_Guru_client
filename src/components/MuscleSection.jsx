import React from 'react';
import { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import MakeMuscleMenu from './MakeMuscleMenu';

export default function MuscleSection({ setSelectedmuscle }) {

    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const BodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...BodyPartsData]);
            // console.log(BodyPartsData)
        }
        fetchExerciseData();
    }, [])


    return (

        <div>
            <MakeMuscleMenu data={bodyParts} setSelectedmuscle={setSelectedmuscle} />


        </div>

    );
}