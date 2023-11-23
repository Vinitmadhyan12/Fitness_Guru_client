import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from '@mui/material';
import axios from 'axios';




export default function ExerciseSection({ variation, currUser, setCount }) {

    const removeFromRoutine = () => {
        const u_id = currUser._id
        // const e_id = variation._id;
        axios.post("https://fitness-guru-server.vercel.app/removeroutine", { u_id, variation })
            .then((res) => {
                alert(res.data)
                setCount(c => c + 1)
            })
            .catch((e) => alert("some error occurred"))

    }
    return (
        <Box className='bg-gray-200 w-[250px] ' sx={{ py: "20px", px: "25px", borderRadius: "10px" }}>
            <Link className='exercixe-card  no-underline' to={`/exercise/${variation._id}`}>
                <img className=' w-[220px]' src={variation.gifUrl} alt={variation.name} loading='lazy' />
                <Stack direction="row" justifyContent="center">
                    <Button sx={{ ml: "21px", color: "#fff", background: "#708090", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
                        {variation.bodyPart}
                    </Button>
                    <Button sx={{ ml: "21px", color: "#fff", background: "#5c656e", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
                        {variation.target}
                    </Button>
                </Stack>
                <Typography ml="21px" color="#fff" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
                    {variation.name}
                </Typography>
            </Link>
            {currUser && <Button onClick={removeFromRoutine} sx={{ ml: "40px", color: "#fff", background: "red", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>remove from routine</Button>}
        </Box>
    )
}

