
![Logo](./assets/img/1716296373896.jpg)


# Multiplication Table

Description
This exercise allows the user to enter a number in an input field and displays the multiplication table for that number, from 1 to 10. If the user enters a non-numeric value, an error message will be displayed asking them to choose a valid number. 😊

Features
- Input a number by the user.
- Calculate and display the multiplication table for that number.
- Validate the input to ensure it's a valid number.
- Display the table in an HTML list. 📋


## Screenshots

![App Screenshot](./assets/img/Capture%20d'écran%202024-12-08%20151514.png)
![App Screenshot](./assets/img/Capture%20d'écran%202024-12-08%20151524.png)


## Code Exemple
```javascript
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
```
## Languages

HTML
CSS
Javascript
## License

[MIT](https://choosealicense.com/licenses/mit/)

