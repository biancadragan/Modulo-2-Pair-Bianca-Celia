'use strict';

const startBtn = document.querySelector('.js_startBtn');
const movieList = document.querySelector('.js_list');
const movieTitle = document.querySelector('.js_movieTitle');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


startBtn.addEventListener('click', (ev) => {
    movieList.innerHTML = `
        <li>Inception</li>
        <li>The butterfly effect</li>
        <li>Eternal Sunshine of the Spotless Mind</li>
        <li>Blue velvet</li>
        <li>Split</li>`;
    const inception = 'Inception';
    const theButterFlyEffect = 'The butterfly effect';
    const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
    const blueVelvet = 'Blue velvet';
    const split = 'Split';
    console.log;
})

movieList.addEventListener('click', (ev) => {
    movieTitle.innerHTML = movieTitle 
})
// selectedmovieParagraph.InnerHTML = 


// const movieTitle = document.querySelector ('.js_movieTitle');

/*
startBtn   //  => <button class="startBtn js_startBtn">Empezar</button>
startBtn.innerHTML    // =>  Empezar

console.log(startBtn.innerHTML);

movieTitle.innerHTML  // => La peli seleccionada es:

console.log(movieTitle.innerHTML);

movieTitle.innerHTML = 2;
*/


