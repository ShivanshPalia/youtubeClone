import axios from "axios";
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
  // url: 'https://youtube-v31.p.rapidapi.com/search',
  params:{
    maxResults:57
  },
  headers: {
    'X-RapidAPI-Key': '1e91239c8fmsh7d23cc42b991ae7p1241a6jsn3ac321329716',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const FetchApi = async (url)=>{
  try {
    const response = await axios.get(`${BASE_URL}/${url}`,options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

   
   
    

