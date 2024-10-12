//  // function sum
//  function sum(num1:number,num2=15){
//     return num1+num2;
//   }
// let mymessage=sum(5);
//  console.log(mymessage);
//  //function factorial
// function factorial(nums:number):number{
//     if(nums === 0){
//         return 1
//         }
//         else{
//             return nums*factorial(nums -1)
//         }
// }
// let number=5;
// let result=factorial(number);
// console.log(`The factorial of ${number} is ${factorial(number)}`);
//areafwidth
function calculateArea(width, height) {
    if (height === undefined) {
        return width * width;
    }
    return width * height;
}
console.log(calculateArea(2, 5));
