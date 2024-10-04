document.addEventListener("scroll",() => 
{

	let scrollMax = document.body.scrollHeight - innerHeight;
	let onEstOu = 100*(scrollY/scrollMax);
	let newBar = document.body.querySelector('.pbar');
	newBar.style.width = `${onEstOu}vw`;
	console.log("Le scroll fonctionne");
	console.log(`
	Hauteur de la page: ${document.body.scrollHeight}
	Hauteur d'affichage: ${innerHeight}
	Postion du scroll: ${Math.round(scrollY)}
	Pourcentage de scroll: ${Math.round(onEstOu)} %
	`);
});