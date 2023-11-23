import React, { useEffect, useState } from "react";
import { Typography, Stack, Button } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BodyPartImage from '../assets/body-part.png';
import TargetImage from '../assets/target.png';
import EquipmentImage from '../assets/equipment.png';
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


export default function Detail({ exerciseDetail, currUser, id }) {
    const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

    // console.log(instructions)

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    const addtoRoutine = () => {

        if (currUser) {
            const u_id = currUser._id
            axios.post("https://fitness-guru-server.vercel.app/addtoroutine", { u_id, exerciseDetail })
                .then(res => {
                    alert(res.data)

                })
                .catch(err => alert("some error occurred"))
        }

    }


    return (
        <div>
            <Stack gap="60px" className="bg-gray-200 " sx={{ flexDirection: { lg: 'row' }, p: '30px', alignItems: 'center' }}>
                <div className="bg-zinc-700 p-[30px] rounded-lg">
                    <img src={gifUrl} alt={name} loading="lazy" className="detail-image w-[500px]" />
                </div>

                <Stack className="flex flex-row" sx={{ gap: { lg: '35px', xs: '20px' } }}>

                    <Typography sx={{ fontSize: { lg: '54px', xs: '30px' } }} color="RED" fontWeight={700} textTransform="capitalize">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="white">
                        Exercises keep you strong.{' '}
                        <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                        of the best exercises to target your {target}. It will help you improve your{' '}
                        mood and gain energy.
                    </Typography>
                    {extraDetail?.map((item) => (
                        <Stack key={item.name} direction="row" gap="24px" alignItems="center" color="white">
                            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                                {item.name}
                            </Typography>
                        </Stack>
                    ))}



                </Stack>
            </Stack >
            <div className="mx-[40px]">
                <Typography className="" sx={{ fontSize: { lg: '40px', xs: '28px' } }} color='white'>
                    Instructions to be followed
                </Typography>
                <Typography className="" sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="white">
                    <ul>
                        {instructions && instructions.map((point) => {
                            return <li>{point}</li>

                        })}
                    </ul>

                </Typography>
            </div>



            <div className="flex flex-row justify-end align-center items-end mx-[30px] text-white text-[30px]">
                <Link to={!currUser._id && '/login'} onClick={currUser && addtoRoutine} className="no-underline">
                    <div className="flex flex-row justify-end align-center items-end bg-blue-400 p-[20px] rounded-xl hover:bg-blue-700 ">
                        <div className="mx-[20px] h-[50px] flex justify-center aling-center items-center text-bold text-white text-[30px]">ADD TO ROUTINE</div>
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '50px', height: '50px' }}>
                            <img src='/report.png' alt="ef" style={{ width: '50px', height: '50px' }} />
                        </Button>
                    </div>
                </Link>
            </div>
        </div>




    );
}