let arr = [1,2,3,4,5]

let newarr = [];

// for(let i = 0; i<arr.length; i++)
// {
//     newarr.push(arr[i]*2);
// }

// Ab hum bina loop lagaye kisi cheez ko karna hai to map function ka use karte hai

newarr = arr.map(function(value,index){// har ke value k liye funtion call karte hai aur return karte hai agar return nhi karenge to undefined value return karega
    
    return value*2;
})
console.log(arr)
console.log(newarr)