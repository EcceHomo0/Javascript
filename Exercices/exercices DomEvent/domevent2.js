const images = document.body.querySelectorAll('img');
console.log(images);
const tableauImages = Array.from(images);
console.log(tableauImages);
tableauImages.map((curseur,index) => curseur.addEventListener('load',()=>{console.log(`L'image numero ${index} vient de finir de charger`);}));