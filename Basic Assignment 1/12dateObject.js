/*12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
    */

    // - What is the year today?

    var todayYear = new Date;
    console.log(todayYear.getFullYear());

    // - What is the month today as a number?

    var todayMonth = new Date;
    console.log(todayMonth.getMonth());

    // - What is the date today?

    var todayDate =new Date;
    console.log(todayDate.getDate());

    // - What is the day today as a number?
    var todayDay = new Date;
    console.log(todayDay.getDay());

    // - What is the hours now?
    var todayHours = new Date;
    console.log(todayHours.getHours());

    // - What is the minutes now?
    var nowMinutes = new Date;
    console.log(nowMinutes.getMinutes());
    
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.
    var nowSeconds = new Date();
    var seconds = Math.round(nowSeconds.getTime()/1000);

    console.log(seconds);



    