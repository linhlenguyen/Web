/**
 * @param {string} s
 * @return {boolean}
 */

var validNumber = 
    {
        "0" : true,
        "1" : true,
        "2" : true,
        "3" : true,
        "4" : true,
        "5" : true,
        "6" : true,
        "7" : true,
        "8" : true,
        "9" : true
    }

var isWholeNumber = function(s)
{
    for (let i = 0; i < s.length; i++){
        if (validNumber[s.charAt(i)] === undefined)
            return false;
    }
    return true;
}

var isValidNumber = function(s, allowDecimal = true){
    //Too many signs
    if (s.split('-').length > 2 || s.split('+').length > 2){
        return false;
    }
    //Doesn't begin with a sign
    if ((s.split('-').length == 2) ||
        s.split('+').length == 2)
    {
        console.log(s.length);
        if ((s.charAt(0) === '-' || s.charAt(0) === '+') && s.length > 1){
            s = s.slice(1); 
        }
        else {
            return false;
        }
    }
    var splitDecimal = s.split('.');
    if (splitDecimal.length == 2 && allowDecimal){
        console.log(splitDecimal);
        var lhs = splitDecimal[0];
        var rhs = splitDecimal[1];
        if (lhs.length == 0 && rhs.length == 0){
            return false;
        }
        return (isWholeNumber(lhs) && isWholeNumber(rhs));
    }
    else if (splitDecimal.length == 1)
    {
        if (splitDecimal[0].length == 0){
            return false;
        }
        return isWholeNumber(splitDecimal[0]);
    }
    return false;
}

var isNumber = function(s) {
    //only have 1 dot and 1 e
    //plus and minus in the middle must be immediately follow e
    //one plus and minus sign at the beginning
    s = s.trim();
    var splite = s.split('e');
    if (splite.length == 2)
    {
        var lhs = splite[0];
        var rhs = splite[1];
        if (rhs.length == 0){
            return false;
        }
        return (isValidNumber(lhs) && isValidNumber(rhs, false));
    }
    else if (splite.length == 1)
    {
        return (isValidNumber(splite[0]));
    }
    return false;
};

console.log(isNumber("-1."));