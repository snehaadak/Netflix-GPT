
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const TrailerBG = ({movieId}) => {

    const bgVideo = useSelector((store)=> store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return(
        <div className="w-full h-screen overflow-hidden">
            <iframe className="top-0 left-0 w-full h-full"
            src={"https://www.youtube.com/embed/"+bgVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist="+bgVideo?.key} 
            title="YouTube video player"></iframe>
        </div>
    )
}

export default TrailerBG