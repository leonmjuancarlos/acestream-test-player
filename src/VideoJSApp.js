// This imports the functional component from the previous sample.
import VideoJS from './components/VideoJS'
import { useRef, useState } from 'react';
import './VideoJSApp.css'

const HOST = 'http://88.98.111.0:6878'

const VideoJSApp = () => {
    const playerRef = useRef(null);
    const [contentId, setContentId] = useState('')

    const [videoJsOptions, setVideoJsOptions] = useState({
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: HOST + '/ace/manifest.m3u8?id=' + contentId,
            type: 'application/x-mpegURL'
        }]
    });

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        /* player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        }); */
    };

    const handleInputChange = (ev) => {
        setContentId(ev.target.value)
    }

    const handleLoadVideo = () => {
        // Actualizar las opciones del reproductor con el nuevo contenido
        setVideoJsOptions({
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
                src: 'http://192.168.1.15:6878/ace/manifest.m3u8?id=' + contentId,
                type: 'application/x-mpegURL'
            }]
        });
    }

    return (
        <div className='container'>
            <input type="text" onChange={handleInputChange} value={contentId} />
            <button onClick={handleLoadVideo}>Cargar Video</button>
            <div className="videojs-wrapper">
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
            <iframe title="ftv_iframe" id="ftv_iframe" name="ftv_iframe" src="https://widgets.futbolenlatv.com/partidos/agenda?color=2100f8&culture=es-ES" width="350" frameborder="0" scrolling="auto" style={{marginBottom: '10px', height: '98vh'}}></iframe>
        </div>
    );
}

export default VideoJSApp