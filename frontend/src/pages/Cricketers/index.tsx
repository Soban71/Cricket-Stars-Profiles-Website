// Import useState
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useStore } from '@nanostores/react';
import { $token, User, setUser } from '../../store/user.atom';
import { BASE_URL } from '../../constants/enviornment';
import Navbar from '../navbars/Navbarss';
import About from '../About/About';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cricketer() {
    const token = useStore($token);
    const [players, setPlayers] = useState([]);
    const [wikiData, setWikiData] = useState({});
    const [userRatings, setUserRatings] = useState({});
    const [showToast, setShowToast] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');


    // Placeholder image URL if no profile picture is found
    const placeholderImage = 'path/to/placeholder-image.jpg';

    useEffect(() => {
        if (token) {
            const decoded: User = jwtDecode(token);
            setUser(decoded);

            // Fetch player data
            axios.get(`${BASE_URL}/cricketer`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => {
                const playersData = res.data.map(player => ({
                    ...player,
                    rating: generateRandomRating()
                }));
                setPlayers(playersData);

                // Fetch Wikipedia data for each player
                playersData.forEach((player) => {
                    fetchWikipediaData(player.playerName);
                });
            });
        }
    }, [token]);

    const generateRandomRating = () => {
        return Math.floor(Math.random() * 5) + 6; // Random number between 6 and 10
    };

    const fetchWikipediaData = (playerName) => {
        // Wikipedia API endpoint
        const wikiApiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${playerName}&prop=pageimages|info&inprop=url&format=json&origin=*`;

        // Fetching Wikipedia data
        axios.get(wikiApiUrl)
            .then((response) => {
                const pages = response.data.query.pages;
                const page = Object.values(pages)[0];
                if (page) {
                    const imageUrl = page.thumbnail?.source || null; // Use null if no image found
                    const wikiUrl = page.fullurl || null; // Use null if no URL found
                    
                    setWikiData((prevData) => ({
                        ...prevData,
                        [playerName]: {
                            imageUrl,
                            wikiUrl,
                        },
                    }));
                }
            })
            .catch((error) => {
                console.error('Error fetching Wikipedia data:', error);
            });
    };

    const handleUserRating = (playerName, rating) => {
        setUserRatings((prevRatings) => ({
            ...prevRatings,
            [playerName]: rating,
        }));
    };

    const handleAddRating = (playerName) => {
        setShowToast(true);
        toast.success(`Rating added Successfully for ${playerName}`);
        console.log(`Rating added for ${playerName}`);
    };

    // Function to filter players based on search query
    const filteredPlayers = players.filter(player =>
        player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="min-h-screen w-full bg-gray-100">
            <Navbar />
            <About />
            {/* Search input and button */}
            <div className="flex justify-center mt-6">
                <input
                    type="text"
                    placeholder="Search by player name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border px-4 py-2 rounded-l"
                />
                {/* <button onClick={() => setSearchQuery('')} className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    
                </button> */}
            </div>
            <main className="w-full px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {filteredPlayers.map((player) => {
                        const wikiInfo = wikiData[player.playerName];
                        const imageUrl = wikiInfo?.imageUrl || placeholderImage; // Use placeholder image if no image is found
                        const wikiUrl = wikiInfo?.wikiUrl;
                        const userRating = userRatings[player.playerName] || '';

                        return (
                            <div
                                key={player.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                {/* Display the player's image */}
                                <img
                                    src={imageUrl}
                                    alt={`${player.playerName}'s profile`}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                                        {player.playerName}
                                    </h2>
                                    <p className="text-gray-700 mb-1">Country: {player.country}</p>
                                    <p className="text-gray-700 mb-1">Role: {player.role}</p>
                                    <p className="text-gray-700 mb-1">Matches: {player.matches}</p>
                                    <p className="text-gray-700 mb-1">Runs: {player.runs}</p>
                                    <p className="text-gray-700 mb-1">Wickets: {player.wickets}</p>
                                    <p className="text-gray-700 mb-1">Rating: {player.rating}</p>
                                    
                                    {/* Display a link to the player's Wikipedia page */}
                                    {wikiUrl && (
                                        <p className="text-gray-700 mb-2">
                                            Wikipedia:
                                            <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 ml-2">
                                                {player.playerName}
                                            </a>
                                        </p>
                                    )}

                                    {/* Allow users to rate the player */}
                                    <div className="flex items-center justify-between">
                                        <label htmlFor={`rating-${player.playerName}`} className="font-semibold text-gray-800">
                                            Your Rating:
                                        </label>
                                        <select
                                            id={`rating-${player.playerName}`}
                                            value={userRating}
                                            className="border rounded px-2 py-1"
                                            onChange={(e) => handleUserRating(player.playerName, e.target.value)}
                                        >
                                            {/* Options for ratings from 5 to 10 */}
                                            {[1,2,3,4,5,6, 7, 8, 9, 10].map((rating) => (
                                                <option key={rating} value={rating}>
                                                    {rating}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button onClick={() => handleAddRating(player.playerName)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                                        Submit Rating
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {showToast && (
                <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            )}
        </div>
    );
}

export default Cricketer;
