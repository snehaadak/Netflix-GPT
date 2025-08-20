import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainTrailerContainer from "./MainTrailerContainer";
import SecondaryLowerContainer from "./SecondaryLowerContainer";


const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header/>
            <MainTrailerContainer/>
            <SecondaryLowerContainer/>
        </div>
    )
}

export default Browse