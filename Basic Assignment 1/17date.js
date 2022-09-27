/*17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
    */
  
    let newDate = new Date;
    
    let year = newDate.getFullYear();
    let months = newDate.getMonth();
    let day = newDate.getDate();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    console.log(`${year}-${months}-${day} ${hour}:${minute}`);
    console.log(`${day}-${months}-${year} ${hour}:${minute}`);
    console.log(`${day}/${months}/${year} ${hour}:${minute}`);