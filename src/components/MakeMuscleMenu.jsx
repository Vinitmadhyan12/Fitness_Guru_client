import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
export default function MakeMuscleMenu({ data, setSelectedmuscle }) {

    return (
        <ScrollMenu>
            <div className=" bg-gray-200  flex flex-col py-[50px] px-[100px] items-center justify-center">
                <div className=" flex flex-row flex-wrap items-center justify-center gap-[35px] max-w-[95%px]">
                    {data.map((item) => {
                        // const path = `/muscle/${item}`
                        return <Link key={item.id || item} className="flex border-solid border-2 rounded-31xl border-white hover:border-red-700  leading-[22px] text-white no-underline" to="/muscle" onClick={() => setSelectedmuscle(item)} ><div key={item.id || item} title={item.id || item} className="relative  tracking-[-0.08em] font-bold font-serif rounded-31xl w-[350px] h-[320px] overflow-hidden shrink-0 flex flex-col py-[105px]  box-border items-center justify-center bg-[url('/public/dumbbell2.png')] bg-cover bg-no-repeat bg-[top]">
                            {item.toUpperCase()}
                        </div></Link>

                    })}
                </div>

            </div>
        </ScrollMenu>

    )
}

