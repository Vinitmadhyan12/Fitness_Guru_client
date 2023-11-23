import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


export default function Trainer({ currUser }) {
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        axios.get('https://fitness-guru-server-hgnhwiz2i-vinits-projects-006eb735.vercel.app/getTrainers')
            .then(res => {
                setTrainer(res.data)
                // console.log(res.data)
            })

            .catch(err => console.log(err))


    }, [])

    const addtrainer = (t_id) => {
        if (currUser._id) {
            const u_id = currUser._id
            axios.post("https://fitness-guru-server.vercel.app/addtrainer", { u_id, t_id })
                .then(res => {
                    alert(res.data)
                })
                .catch(err => alert("some error occurred"))
        }
        else {
            alert("login first")
        }


    }

    // console.log(trainer);

    return (


        <ScrollMenu>
            <div className="bg-gray-200 w-full pt-[70px] font-dosis text-red-700">
                Which tariner you want to choose?
            </div>
            <div className=" bg-gray-200  flex flex-col py-[50px] px-[100px] items-center justify-center">
                <div className=" flex flex-row flex-wrap items-center justify-center gap-[35px] max-w-[95%px]">
                    {trainer.map((item) => {
                        // const path = `/muscle/${item}`
                        return <div className="flex border-solid border-2 rounded-31xl border-white hover:border-red-700  leading-[22px] text-white no-underline" ><div className="relative  tracking-[-0.08em] font-bold font-serif rounded-31xl w-[350px] h-[320px] overflow-hidden shrink-0 flex flex-col py-[105px]  box-border items-center justify-center bg-cover bg-no-repeat bg-[top]">
                            <div onClick={() => addtrainer(item._id)}>{item.name}</div>
                        </div></div>

                    })}
                </div>

            </div>
        </ScrollMenu >


    )
}