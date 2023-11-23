const EXERCISEDB_KEY = process.env.REACT_APP_EXERCISEDB_API_KEY

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3277c5906msh0bec42be8356d6ep17f2d8jsn09226feabc10',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'd3277c5906msh0bec42be8356d6ep17f2d8jsn09226feabc10',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}








// const options = {
//   method: 'GET',
//   params: {
//     from: 'USD',
//     to: 'INR',
//     q: '1.0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'd3277c5906msh0bec42be8356d6ep17f2d8jsn09226feabc10',
//     'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
//   }
// };


// const ExerciseData = async () => {
//   const response = await fetchData('https://currency-exchange.p.rapidapi.com/exchange', options)
//   console.log(response);
// }
// ExerciseData();

