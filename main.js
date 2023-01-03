var taille ; 
var poids;
var indicateur;
var imc;
taille=prompt("Quelle est vitre taille en cm? \r\n Ex : 1.80m =180cm ");
poids=prompt("Quel est votre poid en Kg ?");

if(!isNaN(parseInt(taille)) && taille>120 && taille<250)
{
    if(!isNaN(parseInt(poids)) && poids>20 && poids<250)
    {
        imc=(poids*10000)/Math.pow(taille,2);
        imc=Math.round(imc);
        indicateur=imc-17;
        document.getElementById("img"+indicateur).style.visibility="visible";
        document.getElementById("imc").innerText=imc;
    }else{
        alert("La poid  saisie n'est pas correcte ! \r\n Click F5");

    }
}else
{
alert("La taille saisie n'est pas correcte ! \r\n Click F5");

}
console.log(imc);
