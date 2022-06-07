(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  // Declare variable without value is not a good practice
  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  // Working with NaN; this is part of numbers.
  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200){
    console.log('apply');
  } else {
    console.log('not apply')
  }

  // Hexadecimal value
  let hex = 0xfff;
  console.log('hex', hex);

  // Binary value
  let bin = 0b101001010;
  console.log('binary', bin);

  // Type of numbers; Number/number. Don't use 'Number'.
  const myNumber: Number = 10;
})();
