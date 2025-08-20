import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+
            movieId +"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();


        const filterData = json.results.filter((video)=>video.type === "Trailer")    
        const trailer = filterData.length ? filterData[0] : json.results[0];                  // if it shows multiple trailers use the first one and handle the case where we dont have the trailer use the first video of the arrays

        dispatch(addTrailerVideo(trailer));

    }
   
    useEffect(()=>{
        getMovieVideos();
    },[])
}


export default useMovieTrailer