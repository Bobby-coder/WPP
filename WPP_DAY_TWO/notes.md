# JavaScript Window Object

- In JavaScript, the `window` object is a global object that represents the current browser tab in which the JavaScript file is running.
- `window` object offers various properties and methods related to the browser window and its content.
- `window` object is a global object in the browser environment, which means we can access its properties and methods anywhere in our script.
- To access any property or method of `window` object, we dont need to use `window` as prefix, we can invoke any property or method directly by their names.

```javascript
window.document.getElementById("container"); // will work
document.getElementById("container"); // This will also work, here we did not mentioned the 'window' prefix, we called the method directly by its name.
```

- Variables and functions declared globally(in global scope) are added as properties and methods of the `window` object. For example, `var name = "Bobby";` will create a property `x` on the `window` object.

```javascript
window.name; // "Bobby"
name; // "Bobby"
```

## Key Aspects of the Window Object

### Properties

The `window` object has numerous properties that provide information about the browser window, such as `window.location` (provides information about the URL of the current page), `window.innerHeight` and `window.innerWidth` (provide the height and width of the browser window), `window.document` (provides access to the Document Object Model (DOM) of the current page), and many more.

```javascript
window.location.href; // `https://www.google.com/'
location.href; // `https://www.google.com/'

window.document.charset; // 'UTF-8'
document.charset; // 'UTF-8'

window.innerHeight; // 811
innerHeight; // 811

window.innerWidth; // 1024
innerWidth; // 1024
```

### Methods

The `window` object also has methods for interacting with the browser window, such as `window.alert()` (displays an alert dialog with a message), `window.open()` (opens a new browser window), `window.close()` (closes the current browser window), `window.print()` (prints the current page), `window.document.getElementById()` (select the HTML element with specified Id) and others.

```javascript
window.document.getElementById("container"); // HTML Element
document.getElementById("container"); // HTML Element

window.alert("Hello World");
alert("Hello World");
```

### Events

The `window` object can also handle various events that occur in the browser window, such as `onload`, `onunload`, `onresize`, and `onscroll`. These events can be used to trigger JavaScript code when certain actions occur in the browser window.

### Frames and Child Windows

In the context of web pages with frames or iframes, each frame or iframe has its own `window` object, which represents the window or frame content. Child windows opened using `window.open()` also have their own `window` objects.

## Point to remember

The `window` object is exclusively available in the browser environment, not in Node.js or other runtime environments. Therefore, all APIs offered by the `window` object are accessible only within a browser environment.

If you attempt to access any method or property provided by the `window` object in VSCode or any other IDE, it will not work, as these environments do not emulate the browser environment.

Variables declared globally with the `var` keyword are attached to the `window` object.

```javascript
var myName = "Bobby"; // attached to window object
window.myName; //'Bobby'
```

Variables declared globally with `let` or `const` are not attached to the `window` object.

```javascript
let myName = "Bobby"; // didnt attached to window object
window.myName; // undefined

const myName = "Bobby";
window.myName; // undefined
```
