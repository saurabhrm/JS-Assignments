# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

>Code 

``` 
document.querySelectorAll(".crayons-subtitle-2.lh-tight.mb-4")[1].replaceChildren(["Saurabh Mehare"]);

document.querySelectorAll(".color-base-70.mb-4")[1].replaceChildren(["I am passionate about becoming a web developer"]); 
```