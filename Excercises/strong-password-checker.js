/**
 * @param {string} s
 * @return {number}
 */

var isLowerCase = function(charCode){
    return charCode >= 97 && charCode <= 122;
}

var isUpperCase = function(charCode){
    return charCode >= 65 && charCode <= 90;
}

var isNumber = function(charCode){
    return charCode >= 48 && charCode <= 57;
}

var analyseSeq = function(s){
    var result = {
        lcCount : 0,
        ucCount : 0,
        nCount : 0,
        seq : [], 
        length : s.length
    }
    var prev;
    var currentSeq = [];
    for (let i = 0; i < s.length; i++){
        var charCode = s.charCodeAt(i);
        if (isLowerCase(charCode)){
            result.lcCount = result.lcCount + 1;
        }
        if (isUpperCase(charCode)){
            result.ucCount = result.ucCount + 1;
        }
        if (isNumber(charCode)){
            result.nCount = result.nCount + 1;
        }
        if (charCode === prev){
            currentSeq.push(charCode);
        }
        else {
            if (currentSeq.length > 2)
            {
                result.seq.push(currentSeq);
            }
            currentSeq = [charCode];
        }
        prev = charCode;
    }
    if (currentSeq.length > 2){
        result.seq.push(currentSeq);
    }
    return result;
}

var getNumberOfChangesToFixSeq = function (s){
    return s.length/3;
}

var strongPasswordChecker = function(s) {
    /*
     lower case counter
     uppder case counter
     number counter
     sequences
    */
    var result =  analyseSeq(s);
    console.log(result);
    var toAddOrRemove = result.length < 6 ? 6 - result.length : result.length > 20 ? result.length - 20 : 0;
    
    var minimumChange = 0;
    minimumChange += result.length < 6 ? 6 - result.length : 0;
    minimumChange += result.length > 20 ? result.length - 20 : 0;
    minimumChange += result.lcCount === 0 ? 1 : 0;
    minimumChange += result.ucCount === 0 ? 1 : 0;
    minimumChange += result.nCount === 0 ? 1 : 0;
    minimumChange += result.seq.reduce((a,i) => {
        a += i.length - 2;
        return a;
    }, 0);
    console.log(minimumChange);
    return minimumChange;
};

strongPasswordChecker("aaabb09CCCCddd11122GGGG");
3
