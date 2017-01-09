var tablespoonconv= function(tablespoon) {
  var teaspoon = tablespoon * 3;
  var fluidoz = tablespoon * (1/2);
  return tablespoon.toString() + "tablespoon(s) = " + teaspoon.toString() + " teaspoon(s) = " + fluidoz.toString() + " fluidoz."
};




var tablespoon= parseInt(prompt("Enter value in tablespoon:"));

alert(tablespoonconv(tablespoon));

// var gallonstoquarts= function(gallons) {
//   return gallons * 4;
// };

// var gallon= parseInt(prompt("Enter value in gallon:"));
//
// alert(gallonstoquarts(gallon));
