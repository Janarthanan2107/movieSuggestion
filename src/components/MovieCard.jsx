const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[100%] sm:w-72 mb-5">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{movie.genre}</p>
                <p className="text-sm text-gray-600 mb-2">Language: {movie.language}</p>
                <p className="text-sm text-gray-600">Release Date: {new Date(movie.releasedDate * 1000).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default MovieCard;
