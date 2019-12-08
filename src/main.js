var currentCollectable = 1;
var c = null;
var cList = null;

var itemList = [];
var itemChecklist = {};

var checkedEl;
var uncheckedEl;

function getCollectable(inc) {
    // Increment the collectable page
    currentCollectable += inc || 0;
    // Reset to first page in event of NaN(ery)
    if (isNaN(currentCollectable)) {
        currentCollectable = 1;
    }
    // Min/Max collectable page
    currentCollectable = currentCollectable > collectables.length ? 1 : currentCollectable;
    currentCollectable = currentCollectable < 1 ? collectables.length : currentCollectable;
    // Get the collectable
    c = collectables[currentCollectable - 1];
    cList = collectableMap[c.name];
    // Set Image / Value
    var img = document.querySelector("#img");
    img.style["background-image"] = `url('./images/${currentCollectable}.png')`;
    var value = document.querySelector("#value");
    value.innerText = c.value;
    // Iterate over the list
    var i;
    for (i = 1; i <= 15; i++) {
        var item = document.querySelector(`#item${i}`);
        item.style.display = 'none';
    }
    for (i = 1; i <= cList.length; i++) {
        var name = cList[i - 1];
        // Modify the visible page element
        var item = document.querySelector(`#item${i}`);
        item.style.display = '';
        var itemName = item.querySelector('.name');
        itemName.innerText = name;
        var itemCheck = item.querySelector('.checkmark');
        itemCheck.style.display = itemChecklist[name] ? '' : 'none';
    }
    // Update List Text
    checkedEl.value = "";
    uncheckedEl.value = "";
    for (i = 0; i < itemList.length; i++) {
        var itemName = itemList[i];
        if (itemChecklist[itemName]) {
            checkedEl.value += itemName + ";";
        } else {
            uncheckedEl.value += itemName + ";";
        }
    }
}

function clickedItem(num) {
    var itemName = cList[num - 1];
    itemChecklist[itemName] = !itemChecklist[itemName];
    getCollectable();
}

function next() { getCollectable(1); }
function prev() { getCollectable(-1); }

function loaded() {
    checkedEl = document.querySelector("#checked");
    uncheckedEl = document.querySelector("#unchecked");

    // Initialize the full item list/checklist
    for (var i = 0; i < collectables.length; i++) {
        var _c = collectables[i];
        var _cList = collectableMap[_c.name];
        for (var ii = 0; ii < _cList.length; ii++) {
            var _item = _cList[ii];
            itemList.push(_item);
            itemChecklist[_item] = false;
        }
    }
    // Init the collectables
    getCollectable();
}
