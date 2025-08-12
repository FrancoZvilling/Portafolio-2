// src/components/VideoPlayer/VideoPlayer.tsx (VERSIÓN FINAL PARA react-player@2.12.0)
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css';

// No necesitamos importar React aquí

// Definimos la interfaz para las props
interface VideoPlayerProps {
  url: string;
}

// Creamos el componente como una función simple
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


