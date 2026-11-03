//Tableau simple
var etudiants =["Etudiant1", "Etudiant2", "Etudiant3"];
//Objet
var etudiant={nom: "Acherfouche", prenom: "Rania", age: 19};
//Tableau d'objets
var tabEtudiants =[
    {nom: "Acherfouche", prenom:"Rania", age:19},
    {nom: "Kada", prenom:"Rania", age:19},
    {nom: "Ouchebara", prenom:"Ryma", age:19} 
]
function f1(){
    for(var i = 0; i<etudiants.length; i++){
        console.log(etudiants[i]);
    }
}
function f2(){
    console.log(etudiant);
}
function f3(){
    for (var i=0; i<tabEtudiants.length; i++){
        console.log(tabEtudiants[i].nom + "-"+ tabEtudiants[i].prenom + "-" + tabEtudiants[i].age);
    }
}