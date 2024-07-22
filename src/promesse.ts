function fetchData(): Promise<string>{
    return new Promise((resolve =>{
        setTimeout(() => {
            resolve("Données recuperées");
            
        }, 2000);
    }))

}
async function afficherData(): Promise<void> {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
afficherData();