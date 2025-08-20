import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"

const TrailerBG = ({movieId}) => {

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json)


        const filterData = json.results.filter((video)=>video.type === "Trailer")    
        const trailer = filterData.length ? filterData[0] : json.results[0];                  // if it shows multiple trailers use the first one and handle the case where we dont have the trailer use the first video of the arrays
        console.log(trailer)
    }
   
    

    useEffect(()=>{
        getMovieVideos();
    },[])

    return(
        <div>
            <h1>Trailer Box</h1>
        </div>
    )
}

export default TrailerBG