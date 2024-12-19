const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            jokeContainer.textContent = data.joke || "Oops! Couldn't fetch a joke.";
        })
        .catch((error) => {
            jokeContainer.textContent = "Failed to fetch a joke. Please try again later.";
            console.error("Error fetching joke:", error);
        });
};

button.addEventListener("click", getJoke);
getJoke(); // Fetch the first joke on page load