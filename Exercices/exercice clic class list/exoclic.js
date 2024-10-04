let newH1 = document.querySelector('h1');
// let newb1 = document.querySelector('#b1');
// let newb2 = document.querySelector('#b2');
// let newb3 = document.querySelector('#b3');

// newb1.addEventListener('click',()=> newH1.classList.add('nouveaustyle'));
// newb2.addEventListener('click',()=> newH1.classList.remove('nouveaustyle'));
// newb3.addEventListener('click',()=> newH1.classList.toggle('nouveaustyle'));

let newb = document.querySelectorAll('button');

newb[0].addEventListener('click',()=> newH1.classList.add('nouveaustyle'));
newb[1].addEventListener('click',()=> newH1.classList.remove('nouveaustyle'));
newb[2].addEventListener('click',()=> newH1.classList.toggle('nouveaustyle'));