
/*const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);
console.log(lesTxt[0].innerHTML);
const textesTab = Array.from(lesTxt);
console.log(textesTab);
textesTab.map(uneCase => uneCase.innerHTML = "<h1>LOL JE SUIS HACKERMAN</h1>");
textesTab.map(uneCase => uneCase.style.color = "red" );*/



const userData =
{
	name: 'John delavega',
	email: 'john.doe@example.com',
	age:25,
	dob:'08/02/1989',
	active: true,
	img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
}
/*
let laDiv = document.querySelector('.userProfile');
laDiv.style.backgroundColor = "#4158D0";
laDiv.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
laDiv.style.width = "305px";
laDiv.style.margin = "auto";
laDiv.style.padding = "2rem";
laDiv.style.color = "white";

const userName = document.createElement('h2');
userName.innerText = userData.name;
laDiv.append(userName);

const userEmail = document.createElement('p');
userEmail.innerText = userData.email;
laDiv.append(userEmail);

const userAge = document.createElement('p');
userAge.innerText = userData.age;
laDiv.append(userAge);

const userDob = document.createElement('p');
userDob.innerText = userData.dob;
laDiv.append(userDob);

const userActive = document.createElement('p');
userActive.innerText = userData.active;
laDiv.append(userActive);

const userImage = document.createElement('img');
userImage.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
userImage.style.width="300px";
laDiv.append(userImage);
laDiv.insertBefore(userImage,userName);
*/

/*
function applyStyles(element)
{
	element.style.backgroundColor = `background-color: #4158D0`;
	element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
	element.style.color = "white";
	element.style.width = "305px";
	element.style.margin = "auto";
	element.style.padding = "2rem";	
}

let divUser = document.querySelector('.userProfile');
//let divUser = document.body.getElementsByClassName("userProfile");
applyStyles(divUser);

function createAndAppendElement(tag,text,elementParent)
{
	element = document.createElement(tag);
	element.innerText = text;
	elementParent.append(element);
}

const userImg = document.createElement('img');
userImg.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";
userImg.style.width="300px";
divUser.append(userImg);

createAndAppendElement('h1',userData.name,divUser)
createAndAppendElement('h2',userData.email,divUser)
createAndAppendElement('h3',userData.age,divUser)
createAndAppendElement('h4',userData.dob,divUser)
createAndAppendElement('h5',userData.active,divUser)*/

/*
function ajouterTexte(pseudo,duTexte)
{
	let newUser = document.createElement('p');
	newUser.innerHTML = `<b>${pseudo}</b> - ${duTexte}`;
	document.body.append(newUser);
}

ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','Borne');
ajouterTexte('JCVD','OK');
ajouterTexte('Dong','RoRO');
*/

let newH1 = document.createElement('h1');
newH1.innerText = "Un titre";
document.body.append(newH1);

let leH1 = document.querySelector('h1');
leH1.addEventListener('click',function()
{
	if (newH1.innerText == "Un titre")
	{
		newH1.innerText = "Un autre titre";
	}
	else
	{
		newH1.innerText = "Un titre";
	}
});