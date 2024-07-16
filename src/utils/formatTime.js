function formatTime(time) {
    var hours = Math.floor(time / 3600).toString().padStart(2, '0');
    var minutes = Math.floor(time / 60).toString().padStart(2, '0');
    var seconds = Math.floor(time % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

export default formatTime;
