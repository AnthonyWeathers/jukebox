// making a jukebox
import './styles.css';

import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

function Play({ text, onBtnClick }) {
    return (
        <button className="btn" onClick={onBtnClick}>
            {text}
        </button>
    );
}

function Pause({ text, onBtnClick }) {
    return (
        <button className="btn" onClick={onBtnClick}>
            {text}
        </button>
    );
}

function Up({ onBtnClick }) {
  return (
      <button className="arrow-btn up" onClick={onBtnClick}>
      </button>
  );
}

function Down({ onBtnClick }) {
  return (
      <button className="arrow-btn down" onClick={onBtnClick}>
      </button>
  );
}

function Song({ song }) {
  return (
      <div className='song'>
        { song.title }
      </div>
  );
}

export default function Jukebox() {
  const [play, setPlay] = useState('Play');
  const [pause, setPause] = useState('Pause');
  const [songI, setSongI] = useState(0);

  const playerRef = useRef(null);

  const songs = [
    { title: 'Hope Is the Thing With Feathers', url: 'https://www.youtube.com/watch?v=aPyt41nnM0k' },
    { title: 'Wildfire', url: 'https://www.youtube.com/watch?v=dbIqNh0D4c8' },
    { title: 'If I Can Stop One Heart From Breaking', url: 'https://www.youtube.com/watch?v=TD9hfYUB9ms' },
    { title: 'Interstellar Journey', url: 'https://www.youtube.com/watch?v=lMlxrkf7Z0A' },
    { title: 'Da Capo', url: 'https://www.youtube.com/watch?v=9iFDPYubUbE' },
];

  const songCount = songs.length;

  function handlePlayClick() {
    setPlay('Playing');
    setPause('Pause')
  }

  function handlePauseClick() {
    setPause('Paused');
    setPlay('Play')
  }

  function handleUpClick() {
    setPlay('Play')
    setPause('Pause')
    setSongI((songI) => (songI + 1 + songCount) % songCount)
  }

  function handleDownClick() {
    setPlay('Play')
    setPause('Pause')
    setSongI((songI) => (songI - 1 + songCount) % songCount)
  }

  function handleSongFinished() {
    setPlay('Play');
  }
  // doing % (modulo) with songCount ensures that the index being passed
  // are always within the bounds of the list/array
    return (<>
    <div className='selected'>
          Currently Selected:
    </div>
    <div className='btns'>
        <Up onBtnClick={handleUpClick} />
        <section className='song-row'>
          <Song song={songs[songI % songCount]} />
        </section>
        <section className='song-row middle'>
          <Song song={songs[(songI + 1) % songCount]} />
        </section>
        <section className='song-row'>
          <Song song={songs[(songI + 2) % songCount]} />
        </section>
        <Down onBtnClick={handleDownClick} />

        <section className='jukebox-btns'>
          <Play text={play} onBtnClick={handlePlayClick} />
          <Pause text={pause} onBtnClick={handlePauseClick} />
        </section>


        <div className="player-wrapper" style={{ display: play === 'Playing' ? 'block' : 'none' }}>
          <ReactPlayer
            ref={playerRef}
            url={songs[(songI + 1) % songCount].url}
            playing={play === 'Playing'}
            controls={false}
            width="0"
            height="0"
            onEnded={() => handleSongFinished()}
            config={{
              youtube: {
                playerVars: { autoplay: 0 }
              }
            }}
          />
        </div>
    </div>
    </>
    );

  }