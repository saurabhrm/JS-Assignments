/*
11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.

    */


// 4>3 Output: true
console.log(4>3);


//4>=3 Output: true
console.log(4>=3);

//4<3 Output: false
console.log(4<3);

//4<=3 Output: false
console.log(4<=3);

//4 == 4 Output: true
console.log(4 == 4);

//4 === 4 Output: true
console.log(4===4);

//4 != 4 Output: false
console.log(4 != 4);

//4 !== 4 Output: false
console.log(4 !== 4);

//4 !== '4' Output: true
console.log(4 !== '4');

//4 == '4' Output: true
console.log(4 == '4');

//4 === '4' Output: false
console.log(4 === '4');


var str1 ="python";
var str2 = "jargon";

if(str1.length !== str2.length){
    console.log("the length is not equal");
}else{
    console.log("str1 and str2 length is equal");
}