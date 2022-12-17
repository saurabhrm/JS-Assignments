7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./Pic13.png)

> Code

```

document.forms['top-nav-search-form']['q'].value = "CSS Selectors";

document.getElementsByClassName("button action has-icon search-button")[0].click();


```