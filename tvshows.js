async function onLoad() {
    let json;
    await fetch("./tvshows.json")
        .then(res => res.json())
        .then(
            result => json = result,
            error => console.log(error)
        );
    const tvShows = json["tv-shows"];
    console.log(tvShows);

    document.getElementById("button").addEventListener("click", function () {
        const tvShow = tvShows[getRandom(0, tvShows.length - 1)]
        document.getElementById("selection").innerHTML = "Selection: " + tvShow;
    });
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", onLoad);