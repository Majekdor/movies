async function onLoad() {
    let json;
    await fetch("./movies.json")
        .then(res => res.json())
        .then(
            result => json = result,
            error => console.log(error)
        );
    //console.log(json["movies"].keys);
    const movies = json["movies"];
    let movieArray = [];
    let catString = "";
    for (let key in movies) {
        catString += (key + ", ");
        movieArray.push(key);
    }
    document.getElementById('categories').innerHTML += catString.substring(0, catString.length - 2);

    const button = document.getElementById("button");
    button.addEventListener("click", function () {
        const selection = document.getElementById("select").value.toLowerCase();
        let category = movies[selection];
        if (selection === 'random') {
            category = movies[movieArray[getRandom(0, movieArray.length - 1)]];
            const movie = category[getRandom(0, category.length - 1)]
            document.getElementById("selection").innerHTML = "Selection: " + movie;
        } else if (category === undefined) {
            document.getElementById("selection").innerHTML = "Unknown category.";
        } else {
            const movie = category[getRandom(0, category.length - 1)]
            document.getElementById("selection").innerHTML = "Selection: " + movie;
        }
    });
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", onLoad);