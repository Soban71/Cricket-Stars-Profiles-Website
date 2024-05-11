import React, { useEffect, useState } from "react";
import "./TaskTable.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "@nanostores/react";
import axios from "axios";
import { BASE_URL } from "../../constants/enviornment";
import { $token, setUser } from "../../store/user.atom";

const TaskTable = () => {
    const navigate = useNavigate();
    const [newPlayerName, setNewPlayerName] = useState("");
    const token = useStore($token);
    const [players, setPlayers] = useState<any[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<any[]>([]);
    const [playerData, setPlayerData] = useState({
        playerName: "",
        country: "",
        role: "",
        matches: "",
        runs: "",
        wickets: ""
    });
    const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    useEffect(() => {
        if (token) {
            axios.get(`${BASE_URL}/cricketer`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((res) => {
                    setPlayers(res.data);
                    setFilteredPlayers(res.data); // Initialize filteredPlayers with full players list
                });
        }
    }, [token]);

    const handleSearchPlayer = () => {
      // Convert the newPlayerName to lowercase for case-insensitive comparison
      const searchQuery = newPlayerName.trim().toLowerCase();
  
      if (searchQuery === "") {
          // If the search input is empty, show all players
          setFilteredPlayers(players);
      } else {
          // Filter players based on the input value (newPlayerName)
          const filtered = players.filter(player =>
              player.playerName.toLowerCase().includes(searchQuery)
          );
          setFilteredPlayers(filtered);
      }
  };
  

    const handleAddPlayer = () => {
        axios.post(`${BASE_URL}/cricketer`, playerData, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setPlayers([...players, res.data]);
                setFilteredPlayers([...filteredPlayers, res.data]); // Add new player to filteredPlayers as well
                setShowAddModal(false);
                setPlayerData({
                    playerName: "",
                    country: "",
                    role: "",
                    matches: "",
                    runs: "",
                    wickets: ""
                });
            })
            .catch(error => console.error("Error adding player:", error));
    };

    const handleUpdatePlayer = () => {
        axios.put(`${BASE_URL}/cricketer/${selectedPlayer.id}`, playerData, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => {
                const updatedPlayers = players.map(player => {
                    if (player.id === selectedPlayer.id) {
                        return { ...player, ...playerData };
                    }
                    return player;
                });
                setPlayers(updatedPlayers);
                setFilteredPlayers(updatedPlayers); // Update filteredPlayers as well
                setPlayerData({
                    playerName: "",
                    country: "",
                    role: "",
                    matches,
                    runs,
                    wickets,
                });
                setShowUpdateModal(false);
            })
            .catch(error => console.error("Error updating player:", error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDeletePlayer = async (playerId) => {
        const res = await axios.delete(`${BASE_URL}/cricketer/${playerId}`, { headers: { "Authorization": "Bearer " + token } });
        const updatedPlayers = res.data;
        setPlayers(updatedPlayers);
        setFilteredPlayers(updatedPlayers); // Update filteredPlayers as well
    };

    return (
        <div className="task-table-container">
            <h2>Cricket Player Profiles</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter player name"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearchPlayer} className="search-button">
                    Search
                </button>
            </div>
            
            {/* Add Player Button */}
            <div className="add-player-button">
                <button className="bg-brandLinear px-4" onClick={() => setShowAddModal(true)}>
                    Add Player
                </button>
            </div>
            
            <table className="task-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Role</th>
                        <th>Matches</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.id}</td>
                            <td>{player.playerName}</td>
                            <td>{player.country}</td>
                            <td>{player.role}</td>
                            <td>{player.matches}</td>
                            <td>{player.runs}</td>
                            <td>{player.wickets}</td>
                            <td>
                                <button className="bg-gray-700 px-4"  onClick={() => { setSelectedPlayer(player); setPlayerData(player); setShowUpdateModal(true); }}>Update</button>
                                <button className="search-button" onClick={() => handleDeletePlayer(player.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
{showAddModal && (
    <div className="modal add-modal">
        <div className="modal-content">
            <span className="close" onClick={() => setShowAddModal(false)}>&times;</span>
            <h2>Add Player</h2>
            <form onSubmit={e => { e.preventDefault(); handleAddPlayer(); }}>
                <input className="player-input" type="text" name="playerName" placeholder="Player Name" value={playerData.playerName} onChange={handleChange} />
                <input className="player-input" type="text" name="country" placeholder="Country" value={playerData.country} onChange={handleChange} />
                <input className="player-input" type="text" name="role" placeholder="Role" value={playerData.role} onChange={handleChange} />
                <input className="player-input" type="number" name="matches" placeholder="Matches" value={playerData.matches} onChange={handleChange} />
                <input className="player-input" type="number" name="runs" placeholder="Runs" value={playerData.runs} onChange={handleChange} />
                <input className="player-input" type="number" name="wickets" placeholder="Wickets" value={playerData.wickets} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
)}

{showUpdateModal && (
    <div className="modal update-modal">
        <div className="modal-content">
            <span className="close" onClick={() => setShowUpdateModal(false)}>&times;</span>
            <h2>Update Player</h2>
            <form onSubmit={e => { e.preventDefault(); handleUpdatePlayer(); }}>
                <input className="player-input" type="text" name="playerName" placeholder="Player Name" value={playerData.playerName} onChange={handleChange} />
                <input className="player-input" type="text" name="country" placeholder="Country" value={playerData.country} onChange={handleChange} />
                <input className="player-input" type="text" name="role" placeholder="Role" value={playerData.role} onChange={handleChange} />
                <input className="player-input" type="number" name="matches" placeholder="Matches" value={playerData.matches} onChange={handleChange} />
                <input className="player-input" type="number" name="runs" placeholder="Runs" value={playerData.runs} onChange={handleChange} />
                <input className="player-input" type="number" name="wickets" placeholder="Wickets" value={playerData.wickets} onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
)}


        </div>
    );
};

export default TaskTable;
