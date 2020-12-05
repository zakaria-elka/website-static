var tabPanier;
var totalHt=0;
function chargerPanier()
{
    panierLocal = JSON.parse(localStorage.getItem("panierLocalStorage"));
    tabPanier = panierLocal.monPanier;
    monTableau = document.getElementById("panier");
    for( var i = 0; i < tabPanier.length; i++)
    {
        var ligne =  document.createElement("tr");
        ligne.id = i +"ligne";
        var cellule1 = document.createElement("td");
        var imgElem = document.createElement("img");
        imgElem.setAttribute("src", "../image/poub.jpg");
        imgElem.className = "imgpoubelle";
        imgElem.id = i+"supp";
        imgElem.onclick = function()
        {
            var  reponse = confirm("voulez supprimer cet Article ?");
            if(reponse == true)
            {
                var item = this.getAttribute("id");
                var pos = item.substring(0,1,1);
                supprimerDuPanier(pos);
            }
        }
        cellule1.appendChild(imgElem);
        ligne.appendChild(cellule1);
        for(var prop1 in tabPanier[i])
        {
            var cellule2 = document.createElement("td");
            cellule2.textContent = tabPanier[i][prop1];
            ligne.appendChild(cellule2);
        }
           totalHt = totalHt + tabPanier[i].prixHt;
            monTableau.appendChild(ligne);
    }   
        total = document.createElement("p");
        total.id = "total";
        total.innerText = "Total : " + totalHt + " Dh";
        document.getElementById("montant").appendChild(total);
}
function supprimerDuPanier(pos)
{
    totalHt = totalHt - tabPanier[pos].prixHt;
    var total = document.getElementById("total");
    var monPanier = panierLocal.monPanier;
    monPanier.splice(pos,1);
    var maLigne = document.getElementById(pos+"ligne");
    monTableau.removeChild(maLigne);
    total.innerText = "Total : " + totalHt + " Dh";
    panier.monPanier = tabPanier;
    localStorage.setItem("panierLocalStorage",JSON.stringify(panier));
    window.location.reload();
}