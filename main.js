const Input = require("readline-sync");
const offering = require("./offering");
const OrderCart = require("./orderCart");

const Main = () => {
 console.log("Welcome to Hakdog Restaurant");
 const option1 = "1. View Menu";
 const option2 = "2. View Cart Options";
 const option3 = "3. Quit";
 console.log(`${option1}\n${option2}\n${option3}`);

 var options = Input.questionInt("Please select an option from 1 to 3: ");
 //  validate for correct integer
 if (!(options >= 1 && options <= 3)) {
  options = Input.questionInt("Please re-select an option from 1 to 3: ");
 }

 if (options === 1) {
  //  call functions
  offering.Category();
  Main();
 } else if (options === 2) {
  //  call functions
  OrderCart();
  Main();
 } else {
  var validation = Input.questionInt("Are you sure?\n1: Yes\n2: No\nInput: ");
  if (validation === 1) {
   //   exit
   console.log("Goodbye! Thanks for ordering at Hakdog Restaurant!");
   process.exit();
  } else {
   while (validation < 1 && validation > 2) {
    console.log("Enter valid input!");
    validation = Input.questionInt("Are you sure?\n1: Yes\n2: No\nInput: ");
   }
   Main();
  }
 }
};
Main();
