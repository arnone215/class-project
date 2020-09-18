'use strict'
function getCount() {
    var count = prompt('Great! How many times have you been?');
    while(isNaN(count) || count === '') {
        count = prompt('Please enter a number. How many times have you been?');
    }
    
    return count; }