import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const GPTSearchBar = () => {

    const langkey = useSelector(store => store.config.lang)

    return (
        <div>
            <form className="flex justify-center">
                <input type="text" className="w-1/2 border-2 p-2 mr-4 rounded-lg" 
                    placeholder={lang[langkey].getSearchPlaceholder}></input>
                <button className="bg-red-700 font-bold rounded-lg p-2 text-white">{lang[langkey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;