let arr = [1,2,3,4];
// let arr2 = arr;
// arr2.push(5);
// console.log(arr);
// console.log(arr2);

// console.log(arr);
// console.log(...arr);

//spread operator ki help se hum purani value ko spread karate hai jisse naye variable ko naya address mila jaata hai aur new elemenst sirf ise me dikhta hai

let arr2 = [...arr];
arr2.push(5);
console.log(arr);
console.log(arr2);