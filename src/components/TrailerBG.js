
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const TrailerBG = ({movieId}) => {

    const bgVideo = useSelector((store)=> store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return(
        <div className="w-full">
            <iframe className="w-full aspect-video"
            src={"https://www.youtube.com/embed/"+bgVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist="+bgVideo?.key} 
            title="YouTube video player"></iframe>
        </div>
    )
}

export default TrailerBG