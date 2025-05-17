const sumAll = function(a, b) {
    let sum=0;
    if(a>=0 && b>=0 
        && Number.isInteger(a) && Number.isInteger(b)
        && typeof(a)=='number' && typeof(b)=='number') {
        switch(a<b) {
            case true: 
            for(toAdd=a; toAdd<=b; toAdd++) {
                sum+=toAdd;
            }
            break;
            case false:
            for(toAdd=b; toAdd<=a; toAdd++) {
                sum+=toAdd;
            }    
            break;
        }  
    } else {
        sum='ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
