// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// import the variables and function from module.js
import * as arr from './24web_techs.js';
import * as cont from './24countries.js';


let concat1 = arr.webTech.concat( cont.countries);
console.log(concat1);