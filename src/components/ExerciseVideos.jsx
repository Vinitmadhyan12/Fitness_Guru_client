import React, { useEffect, useState } from "react";

import { Typography, Box, Stack } from '@mui/material';

export default function ExerciseVideos({ exerciseVideos, name }) {
    if (!exerciseVideos.length) return <p className="font-bold text-white text-[30px]" >Loading ...</p>;

    // console.log(exerciseVideos.slice(0, 3))

    return (
        <Box sx={{ marginTop: { lg: '60px', xs: '20px' } }} px="20px" marginBottom="50px" >
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="white" mb="33px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '30px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                {exerciseVideos?.slice(0, 3)?.map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video bg-zinc-700 w-[350px] h-[320px] p-[30px] rounded-xl"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex justify-center items-center mb-[30px]">
                            <img style={{ borderRadius: '20px', width: '340px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                        </div>
                        <Box>
                            <Typography className="no-underline text-red-300" sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={600} color="white" >
                                {item.video.title}
                            </Typography>
                            <Typography fontSize="12px" color="white">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
}