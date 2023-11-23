import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="flex-1 bg-gray-200 w-full mt-auto overflow-hidden flex flex-row   items-center justify-center gap-[195px] text-left text-29xl text-white font-bruno-ace md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            <div className="h-[70px] ml-[30px] overflow-hidden flex flex-row items-center justify-center">
                <Link className="relative tracking-[-0.08em] flex items-center w-[618px] h-[117px] shrink-0 no-underline text-white" to="/">
                    FITNESS GURU
                </Link>
            </div>
            <div className="flex-1 mr-[30px] flex flex-row items-center justify-end gap-[20px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                <div className="rounded bg-white flex flex-col p-3.5 items-center justify-center">
                    <img
                        className="relative w-5 h-[21.67px]"
                        alt=""
                        src="/social-media-logo.svg"
                    />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                    <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/social-media-logo1.svg"
                    />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                    <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/social-media-logo2.svg"
                    />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                    <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/social-media-logo3.svg"
                    />
                </div>
            </div>
        </footer>
    )
}