// write fucntion called allPaarl, which takes a parameter string.
module.exports = function countAllPaarl(numbers){
  // create an array var use the split function. 
    var numberPlates= numbers.split(",");
  // Declare a variable allPaarlNumb with an empty array.
  var allPaarlNumb = [] 
  // use for loop to set conditions.
    for (var i = 0; i < numberPlates.length;i++){
  // Use the trim fucntion to remove an unknown spaces.
     var plate = numberPlates[i].trim();
  // Use the conditional statement if to find all the paarl number plates.    
      if (plate.startsWith("CJ")){
        allPaarlNumb.push(plate)
      }	
    }
  // Declare a return statement which return the length of all the Paarl numberplates
    return allPaarlNumb.length;
  }