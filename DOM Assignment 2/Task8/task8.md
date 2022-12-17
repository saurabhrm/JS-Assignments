8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

> Code

```
let aList =  document.querySelectorAll("#SIvCob a");

for(let i=0, len = aList.length; i<len; i++){
     
    if(i%2==1){
       
     let listt = document.querySelectorAll("#SIvCob a")[i]
   
    }  
  document.querySelectorAll("#SIvCob a")[i].remove()
}



```