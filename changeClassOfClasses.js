// changeClassOfClasses.js// Reference: get-elements-by-class-name.jsfunction changeToCool() {    'use strict';    var elsClass = document.getElementsByClassName('hot');    if (elsClass.length > 2) { // If 3 or more are found.        elsClass[2].className = 'cool'; // Change the value of the third class attribute.    }}function changeToHot() {    'use strict';    var elsClass = document.getElementsByClassName('cool');    var i;    for (i = 0; elsClass.length; i += 1) {        if (elsClass[i].className === 'cool') {            elsClass[i].className = 'hot'; // Change the value of the cool classes to hot.        }    }}