import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useNavigate } from "react-router-dom";
import { Button, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import ExerciseSection from '../components/ExerciseSection';


export default function Profile({ currUser, setCurrUser, setToken }) {
    const navigate = useNavigate();
    const [exerciseRoutine, setExerciseRoutine] = useState([])
    const [trainer, setTrainer] = useState({})
    const [count, setCount] = useState(0)


    const deleteuser = () => {

        axios.delete(`http://localhost:3000/deleteUser/${currUser._id}`)
            .then(res => {
                setCurrUser({})
                navigate('/')
                alert(res)
            })
            .catch(err => navigate('/profile'))

    }

    useEffect(() => {

        if (currUser) {
            const u_id = currUser._id
            axios.post("http://localhost:3000/findexercise", { u_id })
                .then(res => {
                    // console.log(res.data)
                    setExerciseRoutine(res.data)
                    // alert(res.data)
                })
                .catch(err => alert("some error occurred"))
        }
        if (currUser) {
            const u_id = currUser._id
            axios.post("http://localhost:3000/findtrainer", { u_id })
                .then(res => {
                    // console.log(res.data)
                    setTrainer(res.data)
                    // alert(res.data)
                })
                .catch(err => alert("some error occurred"))
        }

    }, [count])

    return (
        <div className='bg-gray-200 min-h-screen'>
            <Navbar currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />
            <div className="self-stretch relative bg-dimgray h-[5px] overflow-hidden shrink-0" />

            <div className="bg-gray-200 w-[500px] pt-[20px]  ml-[30px] text-[35px] font-bruno-ace text-yellow-300">
                Hello {currUser.username}
            </div>
            <div className='flex flex-row justify-end align-end items-end gap-[20px] m-[30px]'>
                <Button onClick={() => navigate("/change")} variant="contained" color="secondary">change Password</Button>
                <Button onClick={deleteuser} variant="contained" color="error">Delete user</Button>
            </div>

            {trainer && <div className='text-[30px] text-white my-[20px]'>Your trainer is {trainer.name}</div>}
            <div className="bg-gray-200 w-full pt-[20px] ">
                <div className='text-[55px] flex flex-row justify-center align-center  my-[30px] font-dosis text-white'>My Routine</div>
            </div>

            {(exerciseRoutine.length > 0) ?
                <Stack direction="row" className="bg-zinc-600" sx={{ gap: { lg: '50px', xs: "30px" }, mx: "50px", py: "50px", borderRadius: "35px" }} flexWrap="wrap" justifyContent="center" >
                    {exerciseRoutine.map((variation, id) => {
                        return <ExerciseSection variation={variation} key={id} currUser={currUser} setCount={setCount} />
                    })}

                </Stack>
                :
                <div className='text-[30px] ml-[30px] text-red-800 my-[20px]'>No exercise found in your routine</div>

            }




            <div className='w-full h-[900px]'></div>

            <Footer />
        </div>
    )
}