function envoyerInfo(){
    const mdp=document.getElementById("mdp");
    if (mdp.value.trim() !== "") {
    const el = document.querySelector("p");
    el.innerHTML = "Vous êtes inscrit(e) !";
    } else {
    alert("Vous devez choisir un mot de passe !");
    }

}
document.getElementById("showPassword").addEventListener("change", function () {
    const mdp = document.getElementById("mdp");
    mdp.type = this.checked ? "text" : "password";
});


function effacerInfo(){
    const el=document.querySelector("p");
    const mdp=document.getElementById("mdp");
    const login=document.getElementById("login");
    mdp.value = "";
    login.value = "";
    el.innerHTML="";
}