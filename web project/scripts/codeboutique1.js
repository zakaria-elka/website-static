 

var monPanier = new Array();
function chargerArticles()
 {

 	var articles = document.getElementById("content");
 	for (var i = 0 ; i < 10; i++) 
 	{
 		var article = document.createElement("div");
 		article.className = "article";
 		article.id = i + "-article";
 	
 		var articleImg  = document.createElement("img");
 		articleImg.setAttribute("src", catalogue[i].image);
 		article.appendChild(articleImg);
 		articleImg.className = "img_art";
		
		var articleNom  = document.createElement("h2");
 		articleNom.className = "nom_art";
 		articleNom.innerText = catalogue[i].nom;
 		article.appendChild(articleNom); 


 		var articleDesc = document.createElement("div");
 		articleDesc.className = "desc_art";
 		articleDesc.innerText = catalogue[i].desc;
 		article.appendChild(articleDesc);

 		var articlePrix = document.createElement("div");
 		articlePrix.innerText = catalogue[i].prix+ " Dhs";
 		article.appendChild(articlePrix);
 		articlePrix.className = "prix_art";
 		var zoneCmd = document.createElement("div");
 		zoneCmd.className = "cmd_art";
 		var inputCmd = document.createElement("input");
 		inputCmd.id = i +"-qte";
 		inputCmd.type ="number";
 		inputCmd.value = 0;
 		inputCmd.min = 0 ;
		inputCmd.max = 5 ;
		zoneCmd.appendChild(inputCmd);


		var bouton = document.createElement("button");
		bouton.id = i+"-cmd";
		bouton.className = "btn_art";
		bouton.onclick = function() { 
		    var item = this.getAttribute("id");
		    var pos2 = item.substring(0,2);
		    if(pos2 >= 10 && pos2 < 21)
		    	ajouterAuPanier(pos2);  
		    else
		    {
		    	var pos = item.substring(0,1);
		    	ajouterAuPanier(pos);
		    }
		    
		      
	   }

		zoneCmd.appendChild(bouton);
		article.appendChild(zoneCmd);
		articles.appendChild(article);
 	}

 }


function searchDansPanier(nom)
{
	var existe = false;
	for (var i = 0; i < monPanier.length; i++)
	 {
		if (monPanier[i].nom == nom) 
			existe = true;
	}
	return existe;
}



function ajouterAuPanier(pos)
{
	if(searchDansPanier(catalogue[pos].nom))
		alert("Cet Article Déja Existe Dans Le Panier");
	else
	{
		var ident = pos +"-qte";
		var qte = document.getElementById(ident).value;
			if(qte <= 0)
				alert("choisissez une quantité > 0");
			else
			{

				var articleCmd = {}; 
				articleCmd.nom = catalogue[pos].nom;
				articleCmd.prix = catalogue[pos].prix;
				articleCmd.qte = qte;
				articleCmd.prixHt = articleCmd.prix * articleCmd.qte;
				monPanier.push(articleCmd);	

				alert("Nom : " + articleCmd.nom);
				alert("Prix Unitaire : " + articleCmd.prix + " Dhs");
				alert("Quantité : " + articleCmd.qte);
				alert("Prix Ht : " + articleCmd.prixHt + " Dhs");
				

			}
	}
}


function stockerPanier(data)
{

var panierJSON = {}; 
panierJSON.monPanier = data;
localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}