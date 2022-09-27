// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    //  - Sort the array and find the min and max age 

//    sort 
let arrSort = ages.sort();

// Min 
let arrMin = Math.min(...arrSort);
// console.log(arrMin);


// Max  

let arrMax = Math.max(...arrSort);
// console.log(arrMax);


//     - Find the median age(one middle item or two middle items divided by two)


// let halfArray = Math.ceil(arrSort.length /2);
// let fistHalf = arrSort.splice(0, halfArray);
// console.log(fistHalf[fistHalf.length-1]);

// - Find the average age(all items divided by number of items)


let uniqueArray = ages.filter(function(item, pos) {
    return ages.indexOf(item) == pos;
})
let midAge = uniqueArray[uniqueArray.length/2];

// console.log(midAge);

// - Find the range of the ages(max minus min)

let range = (Math.max(...ages))-(Math.min(...ages));

// console.log(range);

// - Compare the value of (min - average) and (max - average), use abs() method


let average = ages[ages.length/2];


let absCompare = Math.abs(Math.min(...ages) - average) == Math.abs(Math.max(...ages)- average);

// console.log(absCompare);
