import React from 'react'

import { Menu, Dropdown, Button } from "antd";
import { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { Link, useNavigate } from "react-router-dom";

export default function SearchExercise({ exercises, setSearchExercises, setValue }) {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (search) {
            // const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchExercise = exercises.filter((exercise) => {
                return exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            });
            setValue(search);

            setSearch("");
            setSearchExercises(searchExercise);
            navigate("/search")
            // setVariations(searchExercise)

        }
    }
    return (


        <div className="w-[900px]  flex flex-col items-center justify-between bg-green">
            <div className="m-0 w-full flex-1 rounded-lg bg-gray-200 gap-3 flex flex-row py-2.5 pr-2.5 pl-[29px] box-border items-center justify-between ">
                <input className="bg-gray-200  py-3 px-5 text-[25px] text-white rounded-lg w-[70%] h-[45%] min-w-[180px] focus:outline-none focus:border-transparent"
                    placeholder="Enter Exercise to search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    type='text'
                >
                </input>

                <Button
                    style={{ width: "250px", height: "50px", marginRight: "10px" }}
                    type="primary"
                    size="middle"
                    shape="default"
                    className="text-[30px]  text-white  [background:linear-gradient(90deg,_#a9a5fd,_#ebd75d)]"
                    onClick={handleSubmit}
                >
                    Search

                </Button>

            </div>



        </div>

    )
}