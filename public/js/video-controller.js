const video = document.getElementById('binocs-video');
const rewindButton = document.getElementById('rewindButton');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeSlider = document.getElementById('volumeSlider');
const fastForwardButton = document.getElementById('fastForwardButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const transcriptList = document.getElementById("transcript-list");

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

video.addEventListener("timeupdate", function () {
    for (let i = 0; i < transcriptList.children.length; i++) {
        const span = transcriptList.children[i].querySelector("span");
        const startTime = convertToSeconds(span.textContent);
        const endTime = i + 1 < transcriptList.children.length ? convertToSeconds(transcriptList.children[i + 1].querySelector("span").textContent) : video.duration;
        if (video.currentTime >= startTime && video.currentTime < endTime) {
            transcriptList.children[i].classList.add("current");
        } else {
            transcriptList.children[i].classList.remove("current");
        }
    }
});

function convertToSeconds(timeString) {
    const parts = timeString.split(":");
    return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
}

fullscreenButton.addEventListener('click', function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
