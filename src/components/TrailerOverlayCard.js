const TrailerOverlayCard = ({title,overview}) => {
    
    return(
    <div className="absolute w-full aspect-video flex items-center justify-start px-12 py-40 bg-gradient-to-r from-black">
        <div className=" p-8 max-w-xl text-white">
            <h1 className="text-5xl font-extrabold">
                {title}</h1>
            <p className="py-6 text-lg">
                {overview}</p>
        <div className="flex space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200">
                ▶︎ Play</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-600">
                More info ⓘ</button>
        </div>
        </div>
    </div>
    )
}

export default TrailerOverlayCard