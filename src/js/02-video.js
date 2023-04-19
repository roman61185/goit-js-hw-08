const throttle = require('lodash.throttle');
import Player from '@vimeo/player';


const idFrame = document.querySelector('#vimeo-player'); //доступ к елементу
const player = new Player(idFrame);   //подключаем библиотеку

const onPlay = function (data) {
    console.log(data);
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

//     .then(function (seconds) {

// }).catch(function (error) {
//     switch (error.name) {
//         case 'RangeError':
//             break;
//         default:
//             break;
//     }
// });








