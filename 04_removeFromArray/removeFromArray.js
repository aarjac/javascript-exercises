const removeFromArray = function(anArray, toRemove, ...restParam) {
  for(i=0; i<anArray.length; i++) {
    if(anArray[i]===toRemove) {
        anArray.splice(i, 1);
        i--;
    }  
  }
  if(restParam.length>0) {
    for(j=0; j<restParam.length; j++) {
        let removeAnother=restParam[j];
        for(k=0; k<anArray.length; k++) {
            if(anArray[k]===removeAnother) {
                anArray.splice(k, 1);
            }
        }
    }
  }

  return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
