import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchPage = () => {
    return (
        <div className="pt-28 p-8 bg-black w-full h-screen">
            {/* <h1 className="font-extrabold text-center"> This is GPT Search Page</h1> */}
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
    )
}

export default GPTSearchPage;