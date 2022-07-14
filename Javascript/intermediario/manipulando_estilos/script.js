const element = document.getElementById("style-text");

function setbluebackground() {
  element.style.backgroundColor = "blue";
}

function settransparentbackground() {
  element.style.backgroundColor = "transparent";
}

function setredcolor() {
  element.classList.add("red-color");
}

function removeredcolor() {
  element.classList.remove("red-color");
}
