import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import SearchExercise from '../SearchExercise';

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(), // Mock the useNavigate hook
}));

describe('SearchExercise Component', () => {
    it('handles submit correctly', async () => {
        const setSearchExercisesMock = jest.fn();
        const setValueMock = jest.fn();

        const exercises = [
            { name: 'deadlift', target: 'legs', equipment: 'barbell', bodyPart: 'lower body' },
            { name: 'pullups', target: 'back', equipment: 'body weight', bodyPart: 'upper body' },
            { name: 'squats', target: 'legs', equipment: 'barbell', bodyPart: 'lower body' },
            { name: 'incline', target: 'chest', equipment: 'barbell', bodyPart: 'upper body' },
            { name: 'slow running', target: 'cardio', equipment: 'none', bodyPart: 'full body' },
            { name: 'fast running', target: 'cardio', equipment: 'none', bodyPart: 'full body' }
        ];
        const { getByPlaceholderText, getByText } = render(
            <SearchExercise exercises={exercises} setSearchExercises={setSearchExercisesMock} setValue={setValueMock} />
        );

        const input = getByPlaceholderText('Enter Exercise to search');
        const searchButton = getByText('Search');

        fireEvent.change(input, { target: { value: 'running' } });
        fireEvent.click(searchButton);

        // Wait for the asynchronous code inside handleSubmit
        await waitFor(() => {
            expect(setSearchExercisesMock).toHaveBeenCalledWith([{ name: 'deadlift', target: 'legs', equipment: 'barbell', bodyPart: 'lower body' }, { name: 'slow running', target: 'cardio', equipment: 'none', bodyPart: 'full body' },
            { name: 'fast running', target: 'cardio', equipment: 'none', bodyPart: 'full body' }]); // Adjust this based on the expected result
            expect(setValueMock).toHaveBeenCalledWith('running');
            // Add more assertions based on your component behavior
        });
    });
});



// import ExerciseVideos from '../ExerciseVideos';

// describe('ExerciseVideos Component', () => {
//     const exerciseVideos = [
//         {
//             video: {
//                 videoId: 'auOvcIjALUU',
//                 thumbnails: [
//                     {
//                         url: 'https://i.ytimg.com/vi/auOvcIjALUU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBUDFHaGLvtsW2WbFd8wV9h55Zn6w',
//                         height: 202,
//                         width: 360,
//                     },
//                     {
//                         url: 'https://i.ytimg.com/vi/auOvcIjALUU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNqoBFwE0UHjV8GKG2rs1ivlfjLA',
//                         height: 404,
//                         width: 720,
//                     },
//                 ],
//                 title: 'Lat Pull-Down Alternatives',
//                 channelName: 'LIVESTRONG.COM',
//             },
//         },
//         {
//             video: {
//                 videoId: 'PA3cFLjSNus',
//                 thumbnails: [
//                     {
//                         url: 'https://i.ytimg.com/vi/PA3cFLjSNus/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAgMYgLhDmS4MavsCf_5Uh034lfzA',
//                         height: 270,
//                         width: 480,
//                     },
//                 ],
//                 title: '4 Lat Pulldown ALTERNATIVES You Must Try!!',
//                 channelName: 'ATHLEAN-X™',
//             },
//         },
//         {
//             video: {
//                 videoId: 'w4vU3tzVM70',
//                 thumbnails: [
//                     {
//                         url: 'https://i.ytimg.com/vi/w4vU3tzVM70/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1A9VLAgCWdqmluGiGP2nv4xSDmQ',
//                         height: 202,
//                         width: 360,
//                     },
//                     {
//                         url: 'https://i.ytimg.com/vi/w4vU3tzVM70/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD_6OBZsx8nMVxJYnULtq_8gqD41w',
//                         height: 404,
//                         width: 720,
//                     },
//                 ],
//                 title: 'Back Exercises Ranked (BEST TO WORST!)',
//                 channelName: 'ATHLEAN-X™',
//             },
//         },
//     ];

//     it('renders loading message when exerciseVideos is empty', () => {
//         render(<ExerciseVideos exerciseVideos={[]} name="example" />);
//         const loadingMessage = screen.getByText('Loading ...');
//         expect(loadingMessage).toBeTruthy();
//     });

//     it('renders exercise videos correctly', () => {
//         render(<ExerciseVideos exerciseVideos={exerciseVideos} name="example" />);

//         // Verify that the exercise videos are rendered
//         const videoTitles = screen.getAllByText(/Lat Pull-Down Alternatives|4 Lat Pulldown ALTERNATIVES You Must Try!!|Back Exercises Ranked \(BEST TO WORST!\)/);
//         expect(videoTitles.length).toBe(exerciseVideos.length);

//         // Verify that the links have the correct href attributes
//         const videoLinks = screen.getAllByRole('link');
//         expect(videoLinks[0].getAttribute('href')).toBe('https://www.youtube.com/watch?v=auOvcIjALUU');
//         expect(videoLinks[1].getAttribute('href')).toBe('https://www.youtube.com/watch?v=PA3cFLjSNus');
//         expect(videoLinks[2].getAttribute('href')).toBe('https://www.youtube.com/watch?v=w4vU3tzVM70');

//         // Add more assertions based on your component structure
//     });
// });
