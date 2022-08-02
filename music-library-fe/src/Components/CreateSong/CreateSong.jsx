import React, { useState } from 'react';


const CreateSong = (props) => {

    const [songTitle, setTitle] = useState(''); 
    const [songArtist, setArtist] = useState(''); 
    const [songAlbum, setAlbum] = useState(''); 
    const [releaseDate, setReleaseDate] = useState(''); 
    const [songGenre, setGenre] = useState(''); 



    function handleSubmit(event){
        event.preventDefault(); 
        let newSong = {
            "title": songTitle,
            "artist": songArtist,
            "album": songAlbum,
            "release_date": releaseDate,
            "genre": songGenre
        }
        
        props.addNewSong(newSong);
        
        setTitle(""); 
        setArtist(""); 
        setAlbum(""); 
        setReleaseDate("");  
        setGenre("");

    }


    return (  

    <div>
        <h2 className='addSong-title'>Add <img src ="\images\FA-removebg.png" className = "navbar-image" alt = "FRM ABVE Logo"/> Song</h2>
        <div className='create-container'>
            <form onSubmit = {handleSubmit}>
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Title'>Title:</label>
                        <input type = 'text' id = 'Title' placeholder = 'Song Title' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Artist'>Artist:</label>
                        <input type = 'text' id = 'Artist' placeholder = 'Artist Name' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Album'>Album:</label>
                        <input type = 'text' id = 'Album' placeholder = 'Album title' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Release'>Release Date:</label>
                        <input type = 'date' id = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Genre'>Genre:</label>
                        <input type = 'text' id = 'Genre' placeholder = 'Genre' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                </div> 
                <div className='button-contain'> 
                    <div>
                        <button type = 'submit' className='add-button'>Add Song</button> 
                    </div>
                </div>  
            </form>
        </div>
    </div>
    );
}

export default CreateSong;