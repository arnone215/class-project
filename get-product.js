'use strict'

// helper function
function getProduct() {
var response = prompt('Would you prefer hiking at Mt. Rainier or Mt. Hood?');
var message;

while(response !='Mt. Rainier' && response != 'Mt. Hood') {
item = prompt('Would you rather hike at Mt. Rainier or Mt. Hood? SAY MT. RAINIER!');
}

if (response === 'Mt. Rainier') {
    item = '<img src="images/bora-bora.jpg">';
} else if (response === 'Mt. Hood') {
    item = '<img src="images/mtshukasan.jpg">';
} 

return item;
}
// helper function
function getCount() {
    var getCount = prompt('Great! How many times have you been?');
    while(isNan(count) || count === '') {
        count = prompt('Please enter a number. How many times have you been?');
    }
    return count;
}

function showOrder() {
    var result = '';
    var itemType = getProduct();
    var total = getCount();

    for(var i = 0; i < total; i++) {
        console.log(result);
        result = result + '<p>' + itemType + '</p>';
    }
    return document.write(result);
}

showOrder();