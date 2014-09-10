//Create menu button
var menu = document.createElement("button");
menu.id = "menu";
menu.innerHTML = "Menu";

// Insert After Function
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Header Variable
var header = document.getElementsByTagName("h1")[0];

// Inject Menu Button
insertAfter(header, menu);

// Navigation list variable
var nav = document.getElementById('nav');

// Toggle class function
function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

menu.addEventListener('click', function() {
    toggleClass(nav, 'show');
});