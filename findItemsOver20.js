//create a function called findItemsOver20 that takes a list of objects.
module.exports = function findItemsOver20(parameter){
    var allProducts = [];
// Create a for loop function to help circulate and check each item on the objects.
        for (var i = 0; i<parameter.length; i++){
          var itemName = parameter[i];
//console.log(itemName);
//Set a conditional statement using if to find the qty which have values greater than 20.
          if (itemName.qty > 20){
          allProducts.push(itemName);
          }
        }
//The function should return all the products that have a quantity higher than 20.
    return allProducts;
}