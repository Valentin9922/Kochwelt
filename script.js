function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }

}


function calculatePortions(recipe) {

  let ingredientsCrossaints = [50, 5, 0.1, 1, 2, 1, 21];
  let ingredientsPaella = [100, 62.5, 20, 0.5, 0.5, 0.25, 1.25, 1.25, 175];
  let ingredientsSoup = [750, 8, 3, 150, 1.5, 0.25, 4];
  let ingredientsCabonara =[100, 25, 1, 12];
  let portions = document.getElementById('portions').value;


  if (recipe == 'crossaints') {
    for (let i = 0; i < ingredientsCrossaints.length; i++) {
      let ingredient = "ingredient-" + (i + 1);
      let result = (ingredientsCrossaints[i] * portions).toFixed(2);
      let expectedResult = parseFloat(result);

      document.getElementById(ingredient).innerHTML = expectedResult;


    }
  }

  if (recipe == 'paella') {
    for (let i = 0; i < ingredientsPaella.length; i++) {
      let ingredient = "ingredient-" + (i + 1);
      let result = (ingredientsPaella[i] * portions).toFixed(2);
      let expectedResult = parseFloat(result);

      document.getElementById(ingredient).innerHTML = expectedResult;


    }
  }
  if (recipe == 'soup') {
    for (let i = 0; i < ingredientsSoup.length; i++) {
      let ingredient = "ingredient-" + (i + 1);
      let result = (ingredientsSoup[i] * portions).toFixed(2);
      let expectedResult = parseFloat(result);

      document.getElementById(ingredient).innerHTML = expectedResult;
    }
  }

  if (recipe == 'cabonara') {
    for (let i = 0; i < ingredientsCabonara.length; i++) {
      let ingredient = "ingredient-" + (i + 1);
      let result = (ingredientsCabonara[i] * portions).toFixed(2);
      let expectedResult = parseFloat(result);

      document.getElementById(ingredient).innerHTML = expectedResult;


    }
  }

}


