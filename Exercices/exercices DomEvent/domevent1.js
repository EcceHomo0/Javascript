const newInput = document.body.querySelector('input');
newInput.addEventListener('focus',()=>newInput.classList.add('nouveaustyle'));
newInput.addEventListener('blur',()=>newInput.classList.remove('nouveaustyle'));