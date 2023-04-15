const button = document.querySelector('#joke-btn');
const jokeDiv = document.querySelector('#joke');

function getJoke () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText).value;
            jokeDiv.textContent = data;
        }
    }
    xhr.send();
}

button.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)