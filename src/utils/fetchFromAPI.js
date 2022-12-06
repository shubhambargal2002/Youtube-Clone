import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {maxResults: "50"},
    headers: {
      'X-RapidAPI-Key': 'e1bd06a4ebmsh892bf9a6a8fbe2bp147258jsna1e71e3aad9f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }