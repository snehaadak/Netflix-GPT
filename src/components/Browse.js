import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import MainTrailerContainer from "./MainTrailerContainer";
import SecondaryLowerContainer from "./SecondaryLowerContainer";
import GPTSearchPage from "./GPTSearchPage"
import { useSelector } from "react-redux";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

    return (
        <div>
            <Header/>
            {showGPTSearch ? 
            (<GPTSearchPage/>) : 
            (
            <>
            <MainTrailerContainer/>
            <SecondaryLowerContainer/>
            </>
            )}
        </div>
    )
}

export default Browse