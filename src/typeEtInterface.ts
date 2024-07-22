type Adresse = {
    rue: string;
    ville: string;
    codePostal: string;
    pays: string;
  };
  
  let adresse: Adresse = {
    rue: "123 Rue Principale",
    ville: "Paris",
    codePostal: "75001",
    pays: "France"
  };
interface Personne {
    nom : string;
    prenom : string;
    age : number;
    adresse : Adresse;

}  ;
let personne1 : Personne = {
    nom : "RAHALIARINIRINA",
    prenom : "Valisoa Julie",
    age : 20,
    adresse : adresse
};
function affichePersonne(pers:Personne){
    console.log("je m/'appelle "+ pers.nom + " j/'ai "+ pers.age + "mon adresse est "+ pers.adresse)

}
affichePersonne(personne1);