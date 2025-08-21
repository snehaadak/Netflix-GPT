import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import MainTrailerContainer from "./MainTrailerContainer";
import SecondaryLowerContainer from "./SecondaryLowerContainer";


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header/>
            <MainTrailerContainer/>
            <SecondaryLowerContainer/>
        </div>
    )
}

export default Browse