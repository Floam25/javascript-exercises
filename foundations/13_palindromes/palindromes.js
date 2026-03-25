const palindromes = function (str) {
    str  = str.toLowerCase();
    let result = str.split('').filter(
        function(item) {
            return ('a' <= item && item <= 'z') || ('0' <= item && item <= '9');
        }
    );
  
    let copy_rs = result.slice();
    result.reverse()
    return copy_rs.join('') == result.join('')
};



// Do not edit below this line
module.exports = palindromes;
