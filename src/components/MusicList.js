import React from 'react';

const MusicList = ({songs, onSongSelected}) => {

    // const songListItems = songs.map((song) => {
    //     return <option value={song.title.label} key={song.id.label} onChange={() => onSongSelected(song)}>{song.title.label}</option>
    // });

    const songList = songs.map((song, index) => {
        return <li onClick={() => onSongSelected(song)} key={index}>{song["im:name"].label}</li>
    })

    return (
        <div className="music-list">
            {/* <select id="song-selector" defaultValue="default">
            <option disabled value="default"> Choose a song from the charts...</option>
            {songListItems}
            </select> */}
            <ol>
                {songList}
            </ol>
        </div>
    )
}

export default MusicList;