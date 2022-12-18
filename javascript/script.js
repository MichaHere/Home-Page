function startTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var today = new Date();
    var h = today.getUTCHours() + 1;
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    var d = today.getUTCDay()
    var mn = today.getUTCMonth()
    var dn = today.getUTCDate()
    m = timeFormatter(m);
    document.getElementById('dateTime').innerHTML = `${h}:${m}`;
    document.getElementById('dateDate').innerHTML = `${days[d]}, ${months[mn]}, ${dn}`
    refreshDelay = ( 60 - s ) * 1000;
    var t = setTimeout(startTime, refreshDelay);
}
function timeFormatter(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

startTime()

function Wallpaper() {
    fetch("https://source.unsplash.com/random/2560%C3%971440/?wallpaper")
    .then(function (request) {
        var img = new Image();
        img.onload = function() {
            document.getElementById("pageWrapper").style.backgroundImage = `url(${request.url.replace("1080", "2000")})`
            document.getElementById("pageWrapper").classList.add("loaded")
        }
        img.src = request.url.replace("1080", "2000")
        if (img.complete) img.onload();

        // document.getElementById("pageWrapper").style.backgroundImage = `url(${request.url.replace("1080", "2000")})`
    });
}

Wallpaper()