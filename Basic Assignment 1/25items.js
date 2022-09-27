// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'


//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat");

console.log(shoppingCart);

//     - add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push("Sugar");

console.log(shoppingCart);

//     - remove 'Honey' if you are allergic to honey.

shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
console.log(shoppingCart);

//     - modify Tea to 'Green Tea'

shoppingCart.splice(3,1,"Green Tea");

console.log(shoppingCart);