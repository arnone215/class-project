'use strict'

var response = prompt('Would you rather have a house or hotel');
var message;

if (response === 'house') {
    message = 'houses are nice!';
} else if (response === 'hotel') {
    message = 'hotels are nice!';
} else {
    message ='Fine';
}

document.write('<h3>' + message + '</h3>');