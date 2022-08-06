import React, { useState } from 'react';
import './DisplayMusic.css';


const DisplayMusic = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (  
        <div className = 'display-container'>
        <div className='table-title'>
            <div className ='library-contain'>
                <h2 className='library-title'>Song List</h2>
            </div>
            <div className = 'search-filter'>
                <label className='search-label'>Filter Song List:</label>
                <input type='text' className='custom-input' placeholder="Search...(e.g. Pop music)" onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>
        
        
        <table className='song-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>            
                <th>Release Date</th>
                <th>Genre</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.displaySongs.filter((song) => {
                if (searchTerm === ""){
                    return song;
                }
                else if (song.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.release_date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return song;
                }
            })
            .map((song, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td><td className ='dbutton-contain'><button type = 'submit' className ='delete-button' onClick={() => props.deleteSongProp(song)}>Delete</button></td></td>
                    
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>     
    );
}
 
export default DisplayMusic;