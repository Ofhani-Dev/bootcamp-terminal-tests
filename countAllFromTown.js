// Write function called countAllFromTown which takes two paramters. 
module.exports =function countAllFromTown(par1, par2){
    // Declare a variable called regNumbers which will be separated by a comma.
      var regNumb =  par1.split(",");
    //  console.log(regNumb);
    // Declare a variable called fromStellies with an empty array 
      var fromStellies = [];
    // Give a conditional statement using (for loops).
      for (var i = 0; i <regNumb.length; i++){
    // Declare new variable called allRegNumbers to remove any spaces in the string using trim
        var allRegNumbers = regNumb[i].trim();
    //    console.log(allRegNumbers);
    // Using an if statement to help us get all number plates from a particular location 
         if (allRegNumbers.startsWith(par2)){
        fromStellies.push(allRegNumbers);
         }
      }
    // The fucntion must return the registration number in the string that is for that town.
     return fromStellies.length;
    }