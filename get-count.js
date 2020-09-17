function getCount() {
    var getCount = prompt('Great! How many times have you been?');
    while(isNan(count) || count === '') {
        count = prompt('Please enter a number. How many times have you been?');
    }
    
    return count; }