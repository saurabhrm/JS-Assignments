/*
20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
    */

let students = {
    Saurabh : 91,
    Raj: 70,
    Rohit:50,
    Prajawal:45,
    Aditya: 35
}

for (let i  in students ) {
    if(students[i]<=49){
        console.log(`${i} Your grade is F`);
    }else if(students[i]>=49 && students[i]<=59){
        console.log(`${i} Your grade is D`);
    }else if(students[i]>=60 && students[i]<=79){
        console.log(`${i} Your grade is C`);
    }else if(students[i]>=80 && students[i]<=90){
        console.log(`${i} Your grade is B`);
    }else {
        console.log(`${i} Your grade is A`);
    }
};
