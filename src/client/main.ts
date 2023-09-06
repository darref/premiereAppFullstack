import "./style.css";



let saisie = document.createElement("input");
saisie.setAttribute("type" , "text");
let button = document.createElement("button");
button.innerText = "envoyer";

button.addEventListener("click", async () => {
  const res = await fetch("/nb-secondes/12")
  const message = await res.text()
  button.innerText = message
})


