/*21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
    */

   var userInput = prompt("Enter the Month?");

    let autumn = ["September", "October", "November"];
    let winter = ["December", "January", "February"];
    let spring =["March", "April", "May"];
    let summer = ["June", "July", "August"];

    autumn.forEach((val) => {
      if (val == userInput) {
        document.getElementById("outPut").innerHTML="This Month in Autumn";
      }
    }); 
    winter.forEach((val) => {
        if (val == userInput) {
            document.getElementById("outPut").innerHTML="This Month in Winter";
        }
      }); 
      spring.forEach((val) => {
        if (val == userInput) {
            document.getElementById("outPut").innerHTML="This Month in Spring";
        }
      }); 
      summer.forEach((val) => {
        if (val == userInput) {
            document.getElementById("outPut").innerHTML="This Month in Summer";
        }
      }); 