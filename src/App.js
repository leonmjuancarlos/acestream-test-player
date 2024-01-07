import './App.css';
import ReactHlsPlayer from 'react-hls-player';
import ReactJWPlayer from 'react-jw-player'

const URL = 'http://192.168.1.15:6878/ace/manifest.m3u8?id=60dbeeb299ec04bf02bc7426d827547599d3d9fc'


function App() {
  return (
    <div className="App">
      <h1>Acestream Player</h1>
      {/* <ReactHlsPlayer
        src={URL}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      /> */}
      <ReactJWPlayer
        isAutoPlay={false}
        playerId="asd45r346512dfg45"
        playerScript="https://content.jwplatform.com/libraries/tqjyvT9W.js"
        file={URL}
      // playlist={playlist}
      />
    </div>
  );
}

export default App;
