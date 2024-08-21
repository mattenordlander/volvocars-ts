import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import React from 'react';
import videojs from 'video.js';

const LiveMain = React.memo( ()=> {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      // src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      // type: 'video/mp4'
      src: 'https://cdn.tecviz.net/hls/lrf/240522/hi/odm-539-4709.m3u8',
      type: 'application/x-mpegURL'
    }]
  };

  const handlePlayerReady = (player:any) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div className="flex justify-center">
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
});

export default LiveMain;
