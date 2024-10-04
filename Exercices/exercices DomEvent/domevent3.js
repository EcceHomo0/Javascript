
const newH1 = document.querySelector('h1');
console.log(newH1);
document.body.addEventListener('mouseleave',()=>{
    newH1.style.display ='block';
    newH1.style.color = 'red';
    newH1.style.backgroundColor = 'chartreuse';
    newH1.style.textAlign = 'center';
    newH1.innerText = 'Ne partez pas, vous venez de gagner un million de dollars';
});


/*const h3Title = document.querySelector('#mouseOut');
console.log(h3Title);
document.body.addEventListener('mouseleave',()=>{
    //? Comme vu pour les objets on peux accèder aux propriétés dans l'objet style de l'element 
    h3Title.style.display = 'block';
    h3Title.style.color = 'red';
    h3Title.style.backgroundColor = 'chartreuse';
    h3Title.innerText = 'Ne PARTEZ PAS, vous venez de gagner 1 millions de Dollars';
    h3Title.style.textAlign = 'center';
});*/