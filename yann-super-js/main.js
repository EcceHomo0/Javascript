// const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
//   };
//   console.log(userData);
  
// // let divUserProfil = document.getElementsByClassName('userProfile')[0];
// let divUserProfil = document.querySelector('.userProfile');

// divUserProfil.style.backgroundColor = '#4158D0';
// divUserProfil.style.backgroundImage = 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';
// divUserProfil.style.color = 'white';
// divUserProfil.style.width = '320px';
// divUserProfil.style.margin = 'auto';
// divUserProfil.style.padding = '10px';

// const newH2 = document.createElement('h2');
// newH2.innerText = userData.name;
// divUserProfil.append(newH2);

// const newP = document.createElement('p');
// newP.innerText = userData.email;
// divUserProfil.append(newP);

// const newP2 = document.createElement('p');
// newP2.innerText = userData.age;
// divUserProfil.append(newP2);

// const newP3 = document.createElement('p');
// newP3.innerText = userData.dob;
// divUserProfil.append(newP3);

// const newP4 = document.createElement('p');
// newP4.innerText = userData.active;
// divUserProfil.append(newP4);

// const newImg = document.createElement('img');
// newImg.src = userData.img;
// divUserProfil.append(newImg);

// let photographies = document.querySelector('img');
// // let Allphotographies = document.querySelectorAll('img');
// // console.log(Allphotographies);
// console.log(photographies);
// photographies.style.width = "300px";
// divUserProfil.insertBefore(photographies,newH2);

// console.log(divUserProfil);



// function ajouterTexte(balise,pseudo,duTexte,parentElement)
// function ajouterTexte(pseudo,duTexte)
// {
//     const newP = document.createElement('p');

    
//     // newP0.innerText = duTexte;

//     newP.innerHTML = `<b>${pseudo}</b> -  ${duTexte}`;
    
//     // element[0].innerText = pseudo;
//     // element[1].innerText = duTexte;
//     document.body.append(newP);
// }

// // const nom = document.createElement('p');
// // ajouterTexte('p','Daniel', divPseudo);

// ajouterTexte('Daniel','Gracia');
// ajouterTexte('Jarry','Borne');
// ajouterTexte('JCVD','OK');
// ajouterTexte('Dong','RoRO');

const newH1 = document.createElement('h1');
newH1.innerText = 'D.O.M Events';
document.body.append(newH1);

let leH1 = document.querySelector('h1');
console.log(leH1);

leH1.addEventListener('click',() => 
    {
        if (newH1.innerText == 'D.O.M Events')
        {
            newH1.innerText = '-- :) --';
        }
        else
        {
            newH1.innerText = 'D.O.M Events';
        }
    });

// let selectTitle = false;
// leH1.addEventListener('click',() => {leH1.innerText = selectTitle ? '--:)--':'D.O.M Events'; selectTitle = !selectTitle;});