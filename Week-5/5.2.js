//Write a function called vowelCount which accepts a string and returns a map where the keys are
//numbers and the values are the count of the vowels in the string.

var STR = 'This is a Test Statement for You';
var vowelMap = new Map();
var VOWELS = 'aeiou';

function vowelCount (STR){
    var countsMap = new Map();

    for(i=0; i<VOWELS.length; i++){
        vowelMap.set(VOWELS[i], i.toString());
        countsMap.set(i.toString(), '0');
    }
    
    for(i=0; i<STR.length; i++){
        var cnt = parseInt(countsMap.get(vowelMap.get(STR[i])));
        if(typeof vowelMap.get(STR[i]) == 'undefined') continue;
        cnt = cnt+1;
        countsMap.set(vowelMap.get(STR[i]), cnt.toString());
    }
    
    return countsMap;
}

var stringMap = vowelCount(STR.toLowerCase());

for(i=0; i<VOWELS.length; i++){
    console.log(VOWELS[i] + ' : ' + vowelMap.get(VOWELS[i]) + ' : ' + stringMap.get(vowelMap.get(VOWELS[i])));
}
