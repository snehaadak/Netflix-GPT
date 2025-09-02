import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";


const GPTSearchBar = () => {

    const langkey = useSelector(store => store.config.lang)

    const searchText = useRef(null);

    const handleGPTSearchClick = async () => {
        console.log(searchText.current.value)

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Are semicolons optional in JavaScript?' }],
            model: 'gpt-4o'
        });         
        console.log(gptResults.choices);
    }

    return (
        <div>
            <form className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText} 
                    type="text" 
                    className="w-1/2 border-2 p-2 mr-4 rounded-lg" 
                    placeholder={lang[langkey].getSearchPlaceholder}></input>
                <button 
                    className="bg-red-700 font-bold rounded-lg p-2 text-white" 
                    onClick={handleGPTSearchClick}>
                        {lang[langkey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;