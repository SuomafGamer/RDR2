// Key Down
window.keyDownMap = {};
window.addEventListener("keydown", function (event) {
    console.log(event.keyCode);

    // MODIFIERS
    if (event.keyCode == 16) {
        // SHIFT
        keyDownMap.shift = true;
    } else if (event.keyCode == 17) {
        // CTRL
        keyDownMap.ctrl = true;
    } else if (event.keyCode == 18) {
        // ALT
        keyDownMap.alt = true;
    }

    // [Q]
    if (event.keyCode == 81) {
        prev();
    }
    // [E]
    if (event.keyCode == 69) {
        next();
    }

    // [A]
    if (event.keyCode == 65) {
        selectAll();
    }
    // [S]
    if (event.keyCode == 83) {
        selectInverse();
    }
    // [D]
    if (event.keyCode == 68) {
        selectNone();
    }
});

// Key Up
window.addEventListener("keyup", function (event) {
    //event.preventDefault();

    // MODIFIERS
    if (event.keyCode == 16) {
        // SHIFT
        keyDownMap.shift = false;
    } else if (event.keyCode == 17) {
        // CTRL
        keyDownMap.ctrl = false;
    } else if (event.keyCode == 18) {
        // ALT
        keyDownMap.alt = false;
    }
});

// Mouse
window.addEventListener("mousedown", function (event) {
    keyDownMap.lmb = true;
});
window.addEventListener("mouseup", function (event) {
    keyDownMap.lmb = false;
});
