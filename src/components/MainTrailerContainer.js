import { useSelector } from "react-redux";
import TrailerBG from "./TrailerBG";
import TrailerOverlayCard from "./TrailerOverlayCard";

const MainTrailerContainer = () => {
    
    const movies = useSelector((store)=> store.movies?.nowplayingMovies);
    if (!movies) {
        return <div>Loading...</div>;  // temporary check
        }

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie

    return(
        <div>
            <TrailerOverlayCard title={original_title} overview={overview}/>
            <TrailerBG movieId={id}/>
        </div>
    )
}

export default MainTrailerContainer;