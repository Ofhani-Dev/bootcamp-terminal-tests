/*Write a function called findItemsOver that takes a list of objects each with a 
  name and qty attribute.*/
  module.exports = function findItemsOver(parameter2,threshold){
	// console.log(parameter2);
/* Declare a variable with an empty array to push the items greater than threshold*/
var higherThresholdItems = [];
/* Create a for loop function to help circulate and check each item on the objects*/
  for ( var i = 0; i<parameter2.length ; i++ ){
  	var itemName2 = parameter2[i];
  	/*console.log(itemName2);*/
    /* Set out a conditional statement to find which items are greater than Threshold*/
    if (itemName2.qty > threshold){
    higherThresholdItems.push(itemName2);
    }
  }
/*The function should return products that have quantity higher than the threshold.*/
  return higherThresholdItems;
}