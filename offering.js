const Input = require("readline-sync");

var cart = [];

// item class
class Item {
 constructor(itemName, itemCost, itemCustomisation, itemQuantity) {
  this.itemName = itemName;
  this.itemCost = itemCost;
  this.itemCustomisation = itemCustomisation;
  this.itemQuantity = itemQuantity;
  // items in cart
 }

 getTotalPrice = function () {
  return this.itemCost * this.itemQuantity;
 };

 createCartItem = function (arr, name, customisation) {
  const found = arr.some(
   (el) => el.itemName === name && el.itemCustomisation === customisation
  );
  // if not found in the cart, add it to cart
  if (!found) {
   cart.push(
    new Item(
     this.itemName,
     this.itemCost,
     this.itemCustomisation,
     this.itemQuantity
    )
   );
   //  else increase the quantity of user entered quantity
  } else if (found) {
   var objIndex = cart.findIndex(
    (el) => el.itemName === name && el.itemCustomisation === customisation
   );
   cart[objIndex].itemQuantity += this.itemQuantity;
  }
 };
}

function Category() {
 console.log(
  `Select category:\n1: Noodles\n2: Rices\n3: Drinks\n0: Cancel Selection`
 );
 var categoryInput = Input.questionInt("Please select an option from 0 to 3: ");
 while (!(categoryInput >= 0 && categoryInput <= 3)) {
  categoryInput = Input.questionInt("Please re-select an option from 0 to 3: ");
 }

 //  vars for objects
 var itemName = "";
 var itemCustomisation = "";
 var itemQuantity = "";

 //  validation func to continue adding items
 function checkToAddMore() {
  var checkToAddMore = Input.questionInt(
   "Do you want to add more items in the cart?\n1: Yes\n2: No\nInput: "
  );
  while (checkToAddMore < 1 || checkToAddMore > 2) {
   console.log("Enter a valid input!");
   checkToAddMore = Input.questionInt(
    "Do you want to add more items in the cart?\n1: Yes\n2: No\nInput: "
   );
  }
  if (checkToAddMore === 1) {
   console.log("Alright");
   Category();
  } else {
   console.log("Alright");
  }
 }

 switch (categoryInput) {
  case 1:
   console.log(
    "1. n001: SGD 6 - Dried shrimp and scallion dry noodle\n2. n002: SGD 10 - Braised wagyu beef noodle\n3. n003: SGD 7 Chowmien"
   );

   // noodle category objects
   function itemInputNoodle() {
    itemName = Input.questionInt("Select dish (1 - 3): ");
    itemCustomisation = Input.question(
     "Select option\n1: Spicy\n2: Non-spicy\nInput: "
    );
    // check if user wants spicy or non-spicy
    if (itemCustomisation == 1) {
     itemCustomisation = "Spicy";
    } else if (itemCustomisation == 2) {
     itemCustomisation = "Non-spicy";
    } else {
     // else call function again and repeat the process
     console.log("Enter a valid input!");
     itemInputNoodle();
    }
    // check for item quantity
    itemQuantity = Input.questionInt("Quantity: ");
    // create a new item from selection
    if (itemName == 1) {
     var shrimp = new Item(
      "Dried shrimp and scallion dry noodle",
      6,
      itemCustomisation,
      itemQuantity
     );
     //  add to cart
     shrimp.createCartItem(cart, shrimp.itemName, shrimp.itemCustomisation);
    } else if (itemName == 2) {
     var wagyu = new Item(
      "Braised wagyu beef noodle",
      10,
      itemCustomisation,
      itemQuantity
     );
     //  add to cart
     wagyu.createCartItem(cart, wagyu.itemName, wagyu.itemCustomisation);
    } else if (itemName == 3) {
     var chowmien = new Item("Chowmien", 7, itemCustomisation, itemQuantity);
     //  add to cart
     chowmien.createCartItem(
      cart,
      chowmien.itemName,
      chowmien.itemCustomisation
     );
    } else {
     // if input is not 1 - 3, ask for input again
     console.log("Enter a valid input!");
     itemInputNoodle();
    }
   }
   //    call func
   itemInputNoodle();
   checkToAddMore();
   break;
  case 2:
   console.log(
    "1. r001: SGD 7.5 - Orange chicken with rice\n2. r002: SGD 6.9 - Egg fried rice\n3. r003: SGD 8.0 - Hainanese Pork cutlet curry rice"
   );

   //    rice category objects, function is the same as above but without itemCustomisation
   function itemInputRice() {
    itemName = Input.questionInt("Select dish (1 - 3): ");
    itemQuantity = Input.questionInt("Quantity: ");
    if (itemName == 1) {
     var orangeChicken = new Item(
      "Orange chicken with rice",
      7.5,
      null,
      itemQuantity
     );
     //  add to cart
     orangeChicken.createCartItem(cart, orangeChicken.itemName, null);
    } else if (itemName == 2) {
     var friedRice = new Item("Egg fried rice", 6.9, null, itemQuantity);
     friedRice.createCartItem(cart, friedRice.itemName, null);
    } else if (itemName == 3) {
     var pork = new Item(
      "Hainanese Pork cutlet curry rice",
      8.0,
      null,
      itemQuantity
     );
     //  add to cart
     pork.createCartItem(cart, pork.itemName, null);
    } else {
     console.log("Enter a valid input!");
     itemInputRice();
    }
   }
   itemInputRice();
   checkToAddMore();
   break;
  case 3:
   console.log(
    "1. d001: SGD 0.5 - Water\n2. d002: SGD 2.5 - Tea\n3. d003: SGD 2.0 - Milo"
   );

   //    drinks category objects, function is the same as above
   function itemInputDrinks() {
    itemName = Input.questionInt("Select dish (1 - 3): ");
    itemQuantity = Input.questionInt("Quantity: ");
    if (itemName == 1) {
     var water = new Item("Water", 0.5, null, itemQuantity);
     //  add to cart
     water.createCartItem(cart, water.itemName, null);
    } else if (itemName == 2) {
     var tea = new Item("Tea", 2.5, null, itemQuantity);
     //  add to cart
     tea.createCartItem(cart, tea.itemName, null);
    } else if (itemName == 3) {
     var milo = new Item("Milo", 2.0, null, itemQuantity);
     //  add to cart
     milo.createCartItem(cart, milo.itemName, null);
    } else {
     console.log("Enter a valid input!");
     itemInputDrinks();
    }
   }
   itemInputDrinks();
   checkToAddMore();
   break;
  case 0:
   console.log("Selections have been cancelled");
   break;
 }
}

// show cart
function showCart() {
 return cart;
}
// remove item based on index
function removeItemCart(i) {
 cart.splice(i, 1);
}

module.exports = {
 showCart,
 Category,
 removeItemCart,
};
