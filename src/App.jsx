// { process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE }

import { useEffect, useState } from 'react'
import Login from './pages/Login'
import './App.css'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Muscle from './pages/Muclse'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseDetail from './pages/ExerciseDetail'
import axios from 'axios'
import SearchPage from './pages/SearchPage'
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchData, exerciseOptions } from './utils/fetchData'
function App() {
  const [exercises, setExercises] = useState([]);
  const [selectedmuscle, setSelectedmuscle] = useState("all")
  const [searchExercises, setSearchExercises] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const [value, setValue] = useState("");
  const [token, setToken] = useState('');



  const notify = () => toast("Wow so easy!");


  useEffect(() => {
    // const ExerciseData = async () => {
    //   const Allexercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
    //   setExercises(Allexercises);
    // }
    // ExerciseData();
    console.log(process.env.REACT_APP_BASE_URL)


    axios.get('https://fitness-guru-server.vercel.app/getExercises')
      .then(exercises => {
        setExercises(exercises.data)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<LandingPage exercises={exercises} setExercises={setExercises} setSelectedmuscle={setSelectedmuscle} setSearchExercises={setSearchExercises} currUser={currUser} setCurrUser={setCurrUser} setValue={setValue} token={token} setToken={setToken} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login setCurrUser={setCurrUser} setToken={setToken} />} />
          <Route exact path="/muscle" element={< Muscle exercises={exercises} setExercises={setExercises} selectedmuscle={selectedmuscle} setSearchExercises={setSearchExercises} currUser={currUser} setCurrUser={setCurrUser} setValue={setValue} setToken={setToken} />} />
          <Route exact path="/exercise/:id" element={<ExerciseDetail setExercises={setExercises} exercises={exercises} currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />} />
          <Route exact path="/search" element={<SearchPage searchExercises={searchExercises} currUser={currUser} setCurrUser={setCurrUser} value={value} setToken={setToken} />} />
          <Route exact path="/profile/:id" element={<Profile currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />} />
          <Route exact path="/change" element={<ChangePassword currUser={currUser} setCurrUser={setCurrUser} setToken={setToken} />} />


          <Route Component={Error} />
        </Routes >
      </BrowserRouter >

    </>
  )
}

export default App
