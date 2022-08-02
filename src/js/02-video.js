import Player from "@vimeo/player";
import _, { throttle } from "lodash";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const key = 'videoplayer-current-time';

 function onPlay(event) {
    addToStorage(event);

    const playedSeconds = getFromStorage().seconds;
    const savedTime = Math.floor(playedSeconds);
    // console.log(playedSeconds);
    return savedTime

}


let time = player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(time).then(function(seconds) {}).catch(function(error) {});



function addToStorage(videoTime) {
    localStorage.setItem(key, JSON.stringify(videoTime));
}
function getFromStorage() {
    const getLocalData = localStorage.getItem(key);
    const localData = JSON.parse(getLocalData);
    return localData
}
