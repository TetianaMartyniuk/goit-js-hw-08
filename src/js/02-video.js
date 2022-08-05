import Player from "@vimeo/player";
import _, { throttle } from "lodash";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const key = 'videoplayer-current-time';

 function onPlay(event) {
    localStorage.setItem(key, event.seconds);

}

player.on('timeupdate', throttle(onPlay, 1000));
let time = getFromStorage();
console.log(time);

player.setCurrentTime(time).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

function getFromStorage() {
    const getLocalData = localStorage.getItem(key);
    return getLocalData
}
