import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster_path}) => {
    return (
        <div className="w-48 pr-5">
            <img alt="Movie poster" src={IMG_CDN_URL+ poster_path}></img>
        </div>
    )
}

export default MovieCard;