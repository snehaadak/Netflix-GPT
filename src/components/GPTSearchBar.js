
const GPTSearchBar = () => {
    return (
        <div>
            <form className="flex justify-center">
                <input type="text" className="w-1/2 border-2 p-2 mr-4 rounded-lg" 
                    placeholder="What would you like to watch today?"></input>
                <button className="bg-red-700 font-bold rounded-lg p-2 text-white">Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;