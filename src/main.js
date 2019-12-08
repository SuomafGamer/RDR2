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
    var index = document.querySelector("#index");
    index.innerText = currentCollectable + "/" + collectables.length;
    var value = document.querySelector("#value");
    value.innerText = Number(c.value).toFixed(2);
    var avg = document.querySelector("#avg");
    avg.innerText = Number(c.value / cList.length).toFixed(2);
    // Iterate over the list
    var i;
    for (i = 1; i <= 15; i++) {
        var item = document.querySelector(`#item${i}`);
        item.style.display = 'none';
    }
    var selectedCount = 0;
    for (i = 1; i <= cList.length; i++) {
        var name = cList[i - 1];
        // Modify the visible page element
        var item = document.querySelector(`#item${i}`);
        item.style.display = '';
        var itemName = item.querySelector('.name');
        itemName.innerText = name;
        var itemValue = item.querySelector('.value');
        itemValue.innerText = "$ " + Number(collectablePricingMap[name]).toFixed(2);
        var itemCheck = item.querySelector('.checkmark');
        if (itemChecklist[name]) {
            itemCheck.style.display = '';
            selectedCount++;
        } else {
            itemCheck.style.display = 'none';
        }
    }
    // Modify the Group
    var activeGroupElement = document.querySelector('#left .active');
    activeGroupElement && activeGroupElement.classList.remove("active");
    var groupElement = document.querySelector('#collectionGroup' + (currentCollectable - 1));
    groupElement.classList.add("active");
    var countElement = document.querySelector('#groupSelectedCount' + (currentCollectable - 1));
    countElement.innerText = selectedCount;
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
function selectAll() {
    for (var i = 0; i < cList.length; i++) {
        var itemName = cList[i];
        itemChecklist[itemName] = true;
    }
    getCollectable();
}
function selectInverse() {
    for (var i = 0; i < cList.length; i++) {
        var itemName = cList[i];
        itemChecklist[itemName] = !itemChecklist[itemName];
    }
    getCollectable();
}
function selectNone() {
    for (var i = 0; i < cList.length; i++) {
        var itemName = cList[i];
        itemChecklist[itemName] = false;
    }
    getCollectable();
}

function loaded() {
    checkedEl = document.querySelector("#checked");
    uncheckedEl = document.querySelector("#unchecked");

    var listArea = document.querySelector("#left");

    // Initialize the full item list/checklist
    for (var i = 0; i < collectables.length; i++) {
        var _c = collectables[i];
        var _cList = collectableMap[_c.name];

        // Create element
        var group = document.createElement("div");
        group.className = "group";
        group.id = "collectionGroup" + i;
        var title = document.createElement("span");
        title.innerText = _c.name;

        var count = document.createElement("span");
        count.className = "group-count";
        var tmp1 = document.createElement("span");
        tmp1.innerText = "[";
        var tmp2 = document.createElement("span");
        tmp2.id = "groupSelectedCount" + i;
        tmp2.innerText = "0";
        var tmp3 = document.createElement("span");
        tmp3.innerText = "/" + _cList.length + "]";
        count.appendChild(tmp1);
        count.appendChild(tmp2);
        count.appendChild(tmp3);

        group.appendChild(title);
        group.appendChild(count);
        listArea.appendChild(group);

        // Iterate over each collections items
        for (var ii = 0; ii < _cList.length; ii++) {
            var _item = _cList[ii];
            itemList.push(_item);
            itemChecklist[_item] = false;
        }
    }
    // Init the collectables
    getCollectable();
}
