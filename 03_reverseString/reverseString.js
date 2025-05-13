const reverseString = function(word) {
    
    let stringReversed='';
    if(word.length>0) {
        for(i=word.length; i>=0; i--) {
            stringReversed+=word.charAt(i);
        }
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
