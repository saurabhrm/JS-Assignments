// 23. Write a program which tells the number of days in a month, now consider leap year.


   var getDaysInMonth = function(month,year){
    let date = new Date(year,month,  0).getDate();
    return date;
   };


      console.log(getDaysInMonth(1, 2012));
      console.log(getDaysInMonth(2, 2015));
      console.log(getDaysInMonth(2, 2020));
      console.log(getDaysInMonth(12, 2022));