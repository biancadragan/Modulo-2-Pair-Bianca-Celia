'use strict'

const updateBtn = document.querySelector(".js_updateBtn");


const esParNumAleat = () => {
    const numeroAleat = parseInt(Math.random()*100);
    return (numeroAleat % 2 === 0)
}


updateBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    const moodSelect = document.querySelector(".js_moodSelect");
    const body = document.querySelector(".js_body");
    const emoji = document.querySelector(".js_emoji");


    if (moodSelect.value === ":)") {

        const yellow = document.querySelector(".js_emoji");
        yellow.innerHTML = ':)';
    }

    else {  const yellow = document.querySelector(".js_emoji");
        yellow.innerHTML = ':(';
    }
        const esPar = esParNumAleat();
    console.log(esPar)
    if (esPar)  {
        body.style.backgroundColor = '#ffcc00';
    } else {
        body.style.backgroundColor = '#ff9900';
    }
})



