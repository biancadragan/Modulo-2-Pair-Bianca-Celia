'use strict';

const textparagraph = document.querySelector ('.js_textparagraph');

textparagraph.addEventListener ('click',(ev) => {
   textparagraph.innerHTML = textparagraph.innerHTML + textparagraph.innerHTML;
});