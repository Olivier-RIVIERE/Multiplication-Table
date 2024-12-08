// let nbr = Number(prompt("Choisi un nombre entre 1 et 10 pour afficher sa table de multiplication"));

// if (isNaN(nbr)) {
//   document.getElementById("result").document.innerHTML("<p>Veuillez choisir un nombre</p>");
// } else {
//   let resultHTML = `<h3>La table de multiplication de ${nbr} est :</h3><ul>`;
//   for (let i = 1; i <= 10; i++) {
//     resultHTML +=`<li>${nbr} * ${i} = ${nbr * i}</li>`
//   }
//   resultHTML += "</ul>";
//   document.getElementById("result").innerHTML = resultHTML;

// }

const input = document.getElementById("nbr");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let nbr = Number(input.value);
  if (isNaN(nbr)) {
    document.getElementById("result").innerHTML = ("<p>Veuillez choisir un nombre.</p>");
  } else {
    let resultHTML = `<h3>La table de multiplication de ${nbr} est :</h3><ul>`;
    for (let i = 1; i <= 10; i++) {
      resultHTML += `<li>${nbr} * ${i} = ${nbr * i}</li>`
    }
    resultHTML += "</ul>";
    document.getElementById("result").innerHTML = resultHTML;

  }
})