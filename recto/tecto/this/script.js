// console.log(this);// (Node) Browser k case me windows global object hota hai jo function ko run karata hai


// function fn(){
//     console.log(this);// yaha bhi windows hi ayega kuki function me koi value nhi pass ki gai hai iseliye bydefault windows hi ayega

// }
// fn();

// let obj = {
//     name:"karn",
//     age:21,
//     func:fn()
// }
// obj.func()//self object

// This keyword refers to the current object
// This keyword is used to access the properties of the current object
// This keyword is used to call the function of the current object

//METHOD :: Bind funtion

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let ret = abc.bind(this);
//     ret();
// }
// let obj = {
//     name:"karn",
//     func:fn
// }
// obj.func();

// METHOD :: Arrow function
function fn(){
    console.log(this);
     abc=()=>{// arrow function ye karta hai ki usko jo (this) chahiye usko liye wo apne parents k pass jata hai aur utha leta hai
        console.log(this);// jab yaha pe console.log(this) kiya gaya to directly abc()ko directly this mill gaya
    }
   abc();
}
let obj = {
    name:"karn",
    func:fn
}
obj.func();
