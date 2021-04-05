import React, {useEffect, useState} from 'react';
import MusicList from '../components/MusicList';
import MusicDetail from '../components/MusicDetail';

const MusicContainer = () => {

    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((data) => setSongs(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
    }, [])

    const handleSelectedSong = (song) => {
        setSelectedSong(song)
    }


    return (
        <div className="music-container">
            <MusicList songs={songs} onSongSelected={handleSelectedSong}/>
            <MusicDetail song={selectedSong} />
        </div>
    )
}

export default MusicContainer;