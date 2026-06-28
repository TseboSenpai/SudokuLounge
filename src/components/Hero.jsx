import { useRef, useState } from 'react';
import transitionVideo from '../assets/SudokuLounge.mp4';
import './Hero.css';

const Hero = ({ onEnded }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="hero-stage">

      {/* Video — first frame acts as the background, plays on click */}
      <video
        ref={videoRef}
        className="hero-video"
        src={transitionVideo}
        muted
        playsInline
        preload="auto"
        onEnded={onEnded}
      />

      {/* Everything on top fades out when video starts */}
      <div className={`hero-overlay ${playing ? 'hero-overlay--out' : ''}`}>

        {/* Scrim */}
        <div className="hero-scrim" />

        {/* Wooden crossbeam */}
        <div className="hero-beam">
          <div className="hero-bolt hero-bolt--left" />
          <div className="hero-bolt hero-bolt--right" />
        </div>

        {/* Hanging ropes */}
        <div className="hero-rope hero-rope--left" />
        <div className="hero-rope hero-rope--right" />

        {/* Kanban plaque */}
        <div className="hero-plaque">
          <div className="hero-kanji">数独</div>
          <div className="hero-divider" />
          <div className="hero-wordmark">SUDOKU LOUNGE</div>
          <div className="hero-subline">数独ラウンジ</div>
        </div>

        {/* Tagline + Play button */}
        <div className="hero-footer">
          <div className="hero-tagline">
            ひと息つきながら、ゆっくりと。&ensp;—&ensp;solve at your own pace
          </div>
          <button className="hero-play-btn" onClick={handlePlay}>
            Play
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
