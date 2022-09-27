// 28. Use for loop to iterate from 0 to 100 and print only prime numbers. 



for (var i=2 ; i<=100; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    console.log(i+",");
}
