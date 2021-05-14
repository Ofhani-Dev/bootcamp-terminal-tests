// write fucntion called allPaarl, which takes a parameter string
module.exports = function allPaarl(numbers){
    // create an array var use the split function 
      var numberPlates= numbers.split(",");
      //console.log(numberPlates)
    var allPaarlNumb = [] 
    // use for loop to set conditions
      for (var i = 0; i < numberPlates.length;i++){
    // Use the trim fucntion to remove an unknown spaces
       var plate = numberPlates[i].trim();
    // Use the conditional statement if to find all the paarl number plates    
        if (plate.startsWith("CJ")){
          allPaarlNumb.push(plate)
        }	
      }
      //console.log(allPaarlNumb);
      return allPaarlNumb;
    }