const __menuConf = {
    "menu": undefined,
    "item": undefined,
    "menuState": false,
    "hasItemEventFunction": false,
    "oldContent": [],

    // Style of menu
    "menuStyle": {
        display: "none",
        fontFamily: "monospace",
        width: "min-content",
        height: "min-content",
        padding: "8px 0 8px 0",
        margin: 0,
        borderRadius: "5px",
        border: "1px solid #555",
        backgroundColor: "#222",
        position: "absolute",
        top: 0,
        left: 0,
        userSelect: "none"
    },

    // Style menu items
    "itemStyle": {
        fontSize: "16px",
        padding: "2px 11px 2px 10px",
        margin: 0,
        color: "#ccc"
    },

    // Add items to menu
    "addContent": () => {
        let temp;

        if (!window.hasOwnProperty("menuContent")) {
            window["menuContent"] = [{
                title: "Empty",
                name: "empty"
            }];
        }

        __menuConf.oldContent = menuContent.map(a => {
            return a
        });
        __menuConf.menu.innerHTML = "";

        for (let i = 0; i < __menuConf.oldContent.length; i++) {
            if (__menuConf.oldContent[i] !== "<hr>") {
                temp = __menuConf.item;
                temp.id = "__menuItem" + i;
                temp.setAttribute("onmouseover", `this.style.color="#fff"; this.style.backgroundColor="#333"`);
                temp.setAttribute("onmouseout", `this.style.color="#ccc"; this.style.backgroundColor="#222"`);
                temp.setAttribute("onclick", `itemClick("${__menuConf.oldContent[i].name}")`);
                temp.innerHTML = __menuConf.oldContent[i].title;
                __menuConf.menu.innerHTML += temp.outerHTML;
            } else {
                __menuConf.menu.innerHTML += `<hr style="border: none; height: 1px; background-color: #444">`;
            }
        }
    },

    // Run at lib-start
    "startMenu": () => {
        __menuConf.menu = document.createElement("div");
        Object.assign(__menuConf.menu.style, __menuConf.menuStyle);
        __menuConf.menuEvent();

        __menuConf.item = document.createElement("p");
        Object.assign(__menuConf.item.style, __menuConf.itemStyle);

        __menuConf.addContent();
        document.body.appendChild(__menuConf.menu);

        if (!window.hasOwnProperty("itemClick")) {
            // Triggered on click of an item
            window["itemClick"] = (name) => {
                console.warn(`( Menu.js ):\nMenu-item ${name} was clicked.\n***`);
            }
        }
    },

    // Triggered on contextmenu event
    "menuEvent": (e) => {
        if (!window.hasOwnProperty("__menuEnabled")) {
            window["__menuEnabled"] = true;
        }

        if (__menuEnabled) {
            if (__menuConf.oldContent !== menuContent) {
                __menuConf.oldContent = menuContent.splice();
            }

            if (__menuConf.menuState) {
                openMenu(e);
            } else {
                closeMenu();
            }
        }
    },
};

// The eventlisteners
document.oncontextmenu = (e) => {
    if (__menuEnabled) {
        e.preventDefault();
    }
    __menuConf.menuState = !__menuConf.menuState;
    __menuConf.menuEvent(e);
}

document.onclick = () => {
    __menuConf.menuState = false;
    closeMenu();
}

// Open the menu
function openMenu(e) {
    __menuConf.menu.style.display = "block";
    __menuConf.menu.style.top = e.clientY + "px";
    __menuConf.menu.style.left = e.clientX + "px";
}

// Cleses the menu
function closeMenu() {
    __menuConf.menu.style.display = "none";
}

// Starts the lib
window.onload = __menuConf.startMenu;