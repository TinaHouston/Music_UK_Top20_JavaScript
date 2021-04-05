import React from 'react';

const MusicDetail = ({song}) => {

    if(!song){
        return null
    }

    return (
        <div>
            <h2>{song["im:name"].label}</h2>
            <h3>{song["im:artist"].label}</h3>
            <p>Genre: {song["category"]["attributes"].label}</p>
            <p>Album: {song["im:collection"]["im:name"].label}</p>
            <img src={song["im:image"][2].label} alt="album cover"/>
            <p>
            <audio controls>
                <source src={song["link"][1]["attributes"].href} type="audio/x-m4a" />
            </audio>
            </p>
        </div>
    )

}

export default MusicDetail;