const TrailerOverlayCard = ({title,overview}) => {
    
    return(
    <div className="flex items-center justify-start px-12 py-40">
        <div className="p-8 rounded-2xl max-w-xl">
            <h1 className="text-5xl font-extrabold text-black">
                {title}</h1>
            <p className="py-6 text-lg text-black-200">
                {overview}</p>
        <div className="flex space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
                ▶︎ Play</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-600 transition">
                More info ⓘ</button>
        </div>
        </div>
    </div>
    )
}

export default TrailerOverlayCard