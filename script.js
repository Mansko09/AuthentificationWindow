function envoyerInfo(){
    const mdp=document.getElementById("Mdp");
    if (mdp.value.trim() !== "") {
    const el = document.querySelector("p");
    el.innerHTML = "Vous êtes inscrit(e) !";
    } else {
    alert("Vous devez choisir un mot de passe !");
    }

}

function effacerInfo(){
    const el=document.querySelector("p");
    const mdp=document.getElementById("Mdp");
    const login=document.getElementById("login");
    mdp.value = "";
    login.value = "";
    el.innerHTML="";
}