'use strict';

const startBtn = document.querySelector('.js_startBtn');
const movieList = document.querySelector('.js_list');
const selectedMovie = document.querySelector('.js_selectedMovie');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


startBtn.addEventListener('click', (ev) => {

    const inception = 'Inception';
    const theButterFlyEffect = 'The butterfly effect';
    const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
    const blueVelvet = 'Blue velvet';
    const split = 'Split';

    movieList.innerHTML = `
        <li class="js_m1" id="inception">${inception}</li>
        <li class="js_m2">The butterfly effect</li>
        <li>Eternal Sunshine of the Spotless Mind</li>
        <li>Blue velvet</li>
        <li>Split</li>`;

    const m1 = document.querySelector('.js_m1');

    m1.addEventListener('click', (ev) => {
        selectedMovie.innerHTML = `La peli seleccionada es: ${ev.currentTarget.innerHTML}`
    });

    const m2 = document.querySelector('.js_m2');

    m2.addEventListener('click', (ev) => {
        selectedMovie.innerHTML = `La peli seleccionada es: ${ev.currentTarget.innerHTML}`
    })
    console.log;
})
/*
movieList.addEventListener('click', (ev) => {
    selectedMovie.innerHTML = selectedMovie; 

    movieList.forEach(movie => {
        const listItem = document.createElement ('li');
        listItem.textContent = movie;

        listItem.addEventListener ('click', () => {
            selectedMovie.textContent = `La peli seleccionada es: ${movie}`;
        });
        moviesList.appendChild(listItem);
    });
});
*/
