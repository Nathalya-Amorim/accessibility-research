const video = document.getElementById('binocs-video');
const rewindButton = document.getElementById('rewindButton');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeSlider = document.getElementById('volumeSlider');
const fastForwardButton = document.getElementById('fastForwardButton');
const fullscreenButton = document.getElementById('fullscreenButton');

playButton.addEventListener('click', function () {
    video.play();
});

pauseButton.addEventListener('click', function () {
    video.pause();
});

volumeSlider.addEventListener('input', function () {
    video.volume = volumeSlider.value;
});

rewindButton.addEventListener('click', function () {
    video.currentTime -= 5;
});

fastForwardButton.addEventListener('click', function () {
    video.currentTime += 5;
});

fullscreenButton.addEventListener('click', function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
