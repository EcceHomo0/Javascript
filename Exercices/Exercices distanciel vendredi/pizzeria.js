let nom=prompt("Veuillez saisir votre nom"), prenom=prompt("Veuillez saisir votre prenom"), adresse=prompt("Veuillez saisir votre adresse"), telephone=prompt("Veuillez saisir votre numero de telephone"), pizza=prompt("Quelle pizza desirez-vous ?"), prix;
let blague1 = `Qu'est-ce qu'une pizza dit a une autre pizza qui lui fait de l'ombre ? "Arrete de me trancher la route !"`;
let blague2 = `Qu'est-ce qu'une pizza dit a une autre pizza qui lui demandait des conseils ? "Suis ta pate et tout ira bien"`;
let blague;
if (pizza == "3 fromages")
{
	prix = 7;
	blague = blague1;
} else if (pizza == "4 fromages")
{
	prix = 8;
	blague = blague2;
}

let SumUpOrderPhrase = [nom,prenom,adresse,telephone,pizza,prix,blague];

console.log(`Merci pour votre commande chez "La pizzeria Raffinata" ${SumUpOrderPhrase[1]} ${SumUpOrderPhrase[0]}, votre pizza ${SumUpOrderPhrase[4]} vous sera livree a l'adresse ${SumUpOrderPhrase[2]} dans une demi-heure. En cas de besoin nous vous joindrons au ${SumUpOrderPhrase[3]}. Le paiement de ${SumUpOrderPhrase[5]} euros pourra se faire en especes ou par carte bleue. Bon appetit !

${blague}`);
alert(`Merci pour votre commande chez "La pizzeria Raffinata" ${SumUpOrderPhrase[1]} ${SumUpOrderPhrase[0]}, votre pizza ${SumUpOrderPhrase[4]} vous sera livree a l'adresse ${SumUpOrderPhrase[2]} dans une demi-heure. En cas de besoin nous vous joindrons au ${SumUpOrderPhrase[3]}. Le paiement de ${SumUpOrderPhrase[5]} euros pourra se faire en especes ou par carte bleue. Bon appetit !

${blague}`);