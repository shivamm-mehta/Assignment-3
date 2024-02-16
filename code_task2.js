function calculateNumberToothbrushForLife(age, amountPerMonth) {
    const maxAge = 75; //avg human age
    const totalToothbrushes = (maxAge - age) * 12 * amountPerMonth;   
    console.log(`You will need ${totalToothbrushes} toothbrushes to last you until the age of ${maxAge}`);
  }
  
  calculateNumberToothbrushForLife(18, 3); 
  calculateNumberToothbrushForLife(51, 2); 
  