var getSuggestionByVacationType = function(vacationType) {
    if (vacationType === 'musical') {
        return 'New Orleans';
    } else if (vacationType === 'tropical') {
        return 'Beach vacation in Mexico';
    } else if (vacationType === 'adventurous') {
        return 'Whitewater rafting the Grand Canyon';
    }
};
    
 var getSuggestionByGroupSize = function(groupSize) {
     if (groupSize <= 2) {
       return 'first class';
     } else if (groupSize <= 5) {
         return 'helicopter';
     }  else if (groupSize > 6) {
        return 'charter flight';
     }
};

var vacationType = prompt('What kind of trip would you like to go on? Musical, tropical, or adventurous?');
var groupSize = prompt('How many are in your group?');
var result = 'Since you’re a group of ' + groupSize + ' going on a ' + vacationType + ' vacation, you should take a ' + getSuggestionByGroupSize(groupSize) + ' to ' + getSuggestionByVacationType(vacationType);

document.write(result);

 