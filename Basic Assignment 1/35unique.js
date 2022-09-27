
// 35. Write a functions which checks if all items are unique in the array.


let user = [10, 20, 50, 29, 100, 20, 40];


var unique = user.filter((value, index, self) => {
    return self.indexOf(value) === index});

console.log(unique); 