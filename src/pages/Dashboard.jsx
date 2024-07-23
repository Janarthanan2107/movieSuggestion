import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://hoblist.com/api/movieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting',
            }),
        })
            .then((response) => response.json())
            .then((data) => setMovies(data.result))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-sans capitalize text-center mb-18">Dashboard</h1>
            <p className="text-xl font-sans capitalize text-left text-dark-grey mb-5 ml-2">Kannada Movies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24 ml-5">
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
