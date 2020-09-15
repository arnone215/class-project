'use strict'

var response = prompt('Would you prefer hiking at Mt. Rainier or Mt. Hood?');
var message;

if (response === 'Mt. Rainier') {
    message = 'How cliche!';
} else if (response === 'Mt. Hood') {
    message = 'A bit of a drive but okay!';
} else {
    message ='You don\'t get out much huh?';
}

document.write('<h3>' + message + '</h3>');
