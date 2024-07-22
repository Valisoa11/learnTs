"use strict";
let adresse = {
    rue: "123 Rue Principale",
    ville: "Paris",
    codePostal: "75001",
    pays: "France"
};
;
let personne1 = {
    nom: "RAHALIARINIRINA",
    prenom: "Valisoa Julie",
    age: 20,
    adresse: adresse
};
function affichePersonne(pers) {
    console.log("je m/'appelle " + pers.nom + " j/'ai " + pers.age + "mon adresse est " + pers.adresse);
}
affichePersonne(personne1);
