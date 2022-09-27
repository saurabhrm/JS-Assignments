// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["India",  "Japan", "Germany", "UK", "Australia", "ETHIOPIA"];



if (countries.includes("ETHIOPIA")) {
    console.log("ETHIOPIA");
}
else{
    countries.push("ETHIOPIA");

    for (let i=0; i<countries.length; i++){
        console.log(countries[i].toUpperCase());
    }
};
