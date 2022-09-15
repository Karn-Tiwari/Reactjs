let arr = ["apple","mango","banana","orangesss","grapes"];
let newarr = [];
// for(let i = 0; i<arr.length; i++)
// {
//     let fruits = arr[i];
//     if(fruits.length>6)
//     {
//         newarr.push(fruits);
//     }
// }

//Filter condition k hisab se value return karta hai
newarr = arr.filter(function(value,index){
    return value.length>6;
})
console.log(arr)
console.log(newarr)