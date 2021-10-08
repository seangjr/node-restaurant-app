const Input = require("readline-sync");
const offering = require("./offering");
const showCart = offering.showCart();

function OrderCart() {
 // views the cart
 function viewCart() {
  console.log(
   `Your cart:\n===============================================================\n`
  );
  //   for every item in cart, display it for the user
  let totalPrice = 0;
  for (let i = 0; i < showCart.length; i++) {
   console.log(
    `Qty: ${showCart[i].itemQuantity}, ${showCart[i].itemName}, ${
     showCart[i].itemCustomisation
    }, Item(s) total: $${showCart[i].getTotalPrice()} - Item ID ${i}\n\n`
   );
   totalPrice += showCart[i].getTotalPrice();
  }
  console.log(`Total cost: $${totalPrice.toFixed(2)}\n`);
 }
 //  call view cart function
 viewCart();
 //  cart options
 var cartOptions = Input.questionInt(
  "Select cart options:\n1: Delete item from cart\n2: Send order\n3: Back to menu\nInput: "
 );
 //  validation
 while (cartOptions > 3 || cartOptions < 1) {
  console.log("Enter a valid input!");
  cartOptions = Input.questionInt(
   "Select cart options:\n1: Delete item from cart\n2: Send order\n3: Back to menu\nInput: "
  );
 }

 if (cartOptions === 1) {
  //  remove item from cart
  var cartRemove = Input.questionInt("Enter Item ID to remove: ");
  while (cartRemove < 0 || cartRemove > showCart.length) {
   console.log("Enter a valid input! ");
   cartRemove = Input.questionInt("Enter Item ID to remove: ");
  }
  offering.removeItemCart(cartRemove);
  viewCart();
 } else if (cartOptions === 2) {
  //  check if the cart has at least 1 item
  if (showCart.length > 0) {
   Input.question("Your order has been received! Press ENTER to continue...");
   for (let i = 0; i < showCart.length; i++) {
    offering.removeItemCart(i);
   }
  } else {
   console.log("Select at least one item!");
  }
 }
}

module.exports = OrderCart;
