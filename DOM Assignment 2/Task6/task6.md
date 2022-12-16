6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

> Code

```

document.querySelector(".glass-search___X4QNv .searchinput-wrapper___3YrvF .searchinput___19uW0").addEventListener("mouseover", funn);

function funn() {
    document.querySelector(".glass-search___X4QNv .searchinput-wrapper___3YrvF .searchinput___19uW0").style.backgroundColor = "red";
}

```