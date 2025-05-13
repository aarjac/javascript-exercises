const repeatString = function repeatString(string, num) {
    let stringToRepeat=string;
    let numberOfRepetitions=num;
    let stringOutput="";


    if(numberOfRepetitions>=0) {
        for(let i=0; i<numberOfRepetitions; i++) {
            stringOutput+=stringToRepeat;
        }  
    }
    else {
        return stringOutput="ERROR";
    }
    

    return stringOutput;

};

// Do not edit below this line
module.exports = repeatString;
