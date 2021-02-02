document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});

// selectionner le formulaire de mot de pass 
const passWord = document.querySelector("#password")
// selectionner le chechbox
const afficheMotdepass = document.querySelector("#toggle-password-visibility");

// mettre un ecouteur pour la checkbox
afficheMotdepass.addEventListener("click", ()=>{
  // si c'est la checkbox est coché 
  if(afficheMotdepass.checked == true){
    // afficher le mot de pass 
    passWord.type='text';
      // sinon 
  }else{
    // cacher le mot de pass 
    passWord.type='password';
  }
});

let passwordValue=""
// recuper la valeur de formulaire 
passWord.addEventListener("input", ()=>{
  passwordValue=passWord.value
 console.log(passwordValue)
})
// selectionner le nom de utilisateur 
const userName = document.querySelector("#username")
// recuper le nom de utilisateur 
let usernameValue
userName.addEventListener("input", ()=>{
  usernameValue = userName.value
 console.log(usernameValue)
})
// verifier si 
if(passwordValue == usernameValue){
  console.log("hello")
}else{
  console.log("hi")
}
// le mot de pass et le nom de utilisateur sont le meme 

// refuser le mot de pass 

