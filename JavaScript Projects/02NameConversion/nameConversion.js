let text = document.getElementById("text");
let btn = document.getElementById("convert-btn");


btn.addEventListener("click", function () {

    // CamelCase

        let camelC = document.querySelector("#camel-case");
        camelC.innerHTML=text.value.toCamelCase();
        
        
         // Pascal Case

    let pascalC = document.querySelector("#pascal-case");
    pascalC.innerHTML=toPascalCase(text.value);

    function toPascalCase(string) {
        return `${string}`
          .toLowerCase()
          .replace(new RegExp(/[-_]+/, 'g'), ' ')
          .replace(new RegExp(/[^\w\s]/, 'g'), '')
          .replace(
            new RegExp(/\s+(.)(\w*)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3}`
          )
          .replace(new RegExp(/\w/), s => s.toUpperCase());
      };


    //   Snake Case


    let snakeC = document.querySelector("#snake-case");
    snakeC.innerHTML=toSnakeCase(text.value);


    function toSnakeCase (str) {
  return str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
 };

//  Screaming Snake Case:

let screamC = document.querySelector("#screaming-snake-case");
screamC.innerHTML=Screaming_Snake_Case(text.value);


function Screaming_Snake_Case (stra) {
return stra &&
stra
.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
.map(x => x.toUpperCase())
.join('_');
};

//  Kebab Case:

let kebabC = document.querySelector("#kebab-case");
kebabC.innerHTML=kebabCase(text.value);


function kebabCase (stra) {
   return stra
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();
};

//  Screaming Kebab Case:

let screamingKebabC = document.querySelector("#screaming-kebab-case");
screamingKebabC.innerHTML=scrKebabC(text.value);


function scrKebabC (stra) {
   return stra
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toUpperCase();
};

})


String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();        
    });
};

