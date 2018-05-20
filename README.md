# menu.js
### A simple library for creating menus.

![Menu Preview](https://github.com/KargJonas/random/blob/master/menu.js/preview2.png)
![Menu Preview](https://github.com/KargJonas/random/blob/master/menu.js/preview-hover2.png)

To integrate into your project:
```html
<script defer src="your/path/to/menu.min.js"></script>
```
<br>

### Open/Close The menu manually:
```js
openMenu(e);  // e is your mouseEvent
closeMenu();
```
<br>

### Enable/Disable menu:
```js
__menuEnabled = true;
__menuEnabled = false;
```
<br>

### Set menu content:
```js
menuContent = [
    {title: "TitleThatWillShowUpInYourMenu", name: "valueReturnedInItemClickFunction"},
    "<hr>",  // Divider
];
```
#### e.g.:
```js
menuContent = [
    {title: "TestElem1", name: "test1"},
    "<hr>",
    {title: "TestElem2", name: "test2"},
    {title: "TestElem3", name: "test3"}
];
```

### Get item when clicked:
```js
function itemClick (itemName) {
    ...
}
```
#### e.g.:
```js
function itemClick (itemName) {
    switch(itemName) {
      case "Test1":
        ...
        break;
        
      case "Test2":
        ...
        break;
        
      case "Test3":
        ...
        break;
        
      default:
        break;
    }
}
```
