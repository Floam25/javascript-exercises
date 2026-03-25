const repeatString = function(str, count) {
    let result = "";

    if (count < 0) {
        return 'ERROR';
    }

    while (count--) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
