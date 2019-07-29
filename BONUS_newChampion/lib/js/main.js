const newNode = document.createElement("div")
newNode.className = "champ_container pyke"
const h2Text = document.createElement("h2")
h2Text.innerText = "Pyke, The Bloodharbor Ripper"


// let x = document.getElementsByClassName("div");
// let t = document.createTextNode("Pyke, The Bloodharbor Ripper");
// document.getElementsByClassName(x)
// document.body.style.backgroundImage = ('pyke.jpg');
// document.getElementsByClassName("node").style.color = "#92fdfe";

const parentContainer = document.getElementsByClassName("main_container");
newNode.appendChild(h2Text);
parentContainer[0].appendChild(newNode);
