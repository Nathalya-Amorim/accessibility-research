const media = document.getElementById('binocs-media');
const rewindButton = document.getElementById('rewindButton');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeSlider = document.getElementById('volumeSlider');
const fastForwardButton = document.getElementById('fastForwardButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const transcriptList = document.getElementById("transcript-list");

playButton.addEventListener('click', function () {
    media.play();
});

pauseButton.addEventListener('click', function () {
    media.pause();
});

volumeSlider.addEventListener('input', function () {
    media.volume = volumeSlider.value;
});

rewindButton.addEventListener('click', function () {
    media.currentTime -= 5;
});

fastForwardButton.addEventListener('click', function () {
    media.currentTime += 5;
});

media.addEventListener('timeupdate', function () {
    seekbar.value = this.currentTime / this.duration;
})

media.addEventListener("timeupdate", function () {
    for (let i = 0; i < transcriptList.children.length; i++) {
        const span = transcriptList.children[i].querySelector("span");
        const startTime = convertToSeconds(span.textContent);
        const endTime = i + 1 < transcriptList.children.length ? convertToSeconds(transcriptList.children[i + 1].querySelector("span").textContent) : media.duration;
        if (media.currentTime >= startTime && media.currentTime < endTime) {
            transcriptList.children[i].classList.add("current");
            transcriptList.children[i].scrollIntoView({ block: "start", behavior: "smooth" });
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
    if (media.requestFullscreen) {
        media.requestFullscreen();
    } else if (media.webkitRequestFullscreen) {
        media.webkitRequestFullscreen();
    } else if (media.msRequestFullscreen) {
        media.msRequestFullscreen();
    }
});
