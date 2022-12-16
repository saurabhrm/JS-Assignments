2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

>(7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

> Code

```

let product = document.querySelectorAll(".as-imagegrid-item ");

let arr= [];

for(let i=0; i<product.length; i++){
    
    let productName = product[i];
 
     let newArr = productName.innerText;

    arr.push(newArr)
 }
 console.log(arr);

```
