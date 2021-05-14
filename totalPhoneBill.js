var string = 'call, sms, call, sms, sms'
// Write a function called totalPhoneBill which takes in one paramtere string
module.exports = function totalPhoneBill(amount){
  let overAllPhoneBill = 0;
var amountArray = amount.split(",");
// console.log(amountArray);
  // create an if function 
	for ( var i = 0; i<amountArray.length; i++){
	var phoneBill= amountArray[i].trim();
	//console.log(phoneBill);
      if (phoneBill.includes("all")){
	//	console.log(2.75)
        overAllPhoneBill += 3.25
      }
      else {
     // console.log(0.65) 
        overAllPhoneBill += 1.65
      }
    }
  return ("R" + overAllPhoneBill.toFixed(2)); 
}