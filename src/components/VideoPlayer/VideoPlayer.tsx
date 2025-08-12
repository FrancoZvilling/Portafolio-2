// src/components/VideoPlayer/VideoPlayer.tsx (VERSIÓN SIMPLE Y ROBUSTA)
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        width="100%"
        height="100%"
        controls={true}
        light={true}
      />
    </div>
  );
}

export default VideoPlayer;


