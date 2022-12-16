3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

> Code

```

let newSection = document.createElement("section")

newSection.className = "parent";
let head = document.createElement("h3");
head.innerText="My New FAQ"
newSection.appendChild(head)


document.querySelector(".article .accordion-homepage ").append(newSection);

```
