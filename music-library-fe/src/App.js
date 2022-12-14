
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong';


function App() {

  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs();
  }, [])


  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  } 

  return (
    <div className='page-container'>
      <div><DisplayMusic displaySongs = {songs}/></div> 
      <div className='content-wrap'><CreateSong addNewSong={createSong}/></div>
      
    </div>
  );
}

export default App;
