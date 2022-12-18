5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./Pic9.png)

> Code

```

let fEle = document.getElementsByClassName("diwali-deals-product-sale-btn");

for(let i=0; i<fEle.length; i++){
document.getElementsByClassName("diwali-deals-product-sale-btn")[i].innerText="Check out"

}



```