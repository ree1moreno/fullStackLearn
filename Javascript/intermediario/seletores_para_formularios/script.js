const button = document.getElementById("btn");

function showInfo() {
  let name = document.querySelector("input[name='name']").value;
  let favoriteColor = document.querySelector(
    "select[name='color'] option:checked",
  ).text;
  let likeProgramming = document.querySelector(
    "input[name='like-programming']:checked",
  ).value;
  let developerOptions = document.querySelectorAll(
    "input[name='developer-options']:checked",
  );
  let optionsValues = [];
  developerOptions.forEach((element) => {
    optionsValues.push(element.value);
  });
  let optionsChecked = optionsValues.join(", ");
  alert(`Nome: ${name}
Cor primária: ${favoriteColor}
Gosta de programar? ${likeProgramming}
Conhecimentos em programação web: ${optionsChecked}`);
}

button.addEventListener("click", showInfo);
