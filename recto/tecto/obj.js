// let obj = {
//     name: "Rohan Das",
//     add:{
//         city: "Kolkata",
//         country:"India",
//         pin: 700001,
//         State:{
//             code:"DL",
//             name:"Delhi",
//             pin:"12345"
// }
//     }
// }

// let obj2 = obj;
// obj2.add.name = "karn";

// let obj2 = {...obj};// isko hum looog kahte hai shallow copy
// let obj2= {...obj,add:{...obj.add}};// Isme bhi same cheez hota hai bass address k ander k components ko naya address dene k liye ya spread karane k liye aesa karte hai
// let obj2 = {...obj,add:{...obj.add,State:{...obj.add.State}}};// isko kahte hai deep copy


// obj2.name = "karn";
// obj2.add.country = "USA";
//  obj2.add.State.name = "Uttar Pradesh";
// console.log(obj)
// console.log(obj2)

// string kuki stack pe store hota hai iseliye iska alag address apne aap banta hai jisse spread ka use nhi karna padta hai aese hi ho jata hia

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.add.State.name = "Uttar Pradesh";
// console.log(obj)
// console.log(obj2)


//---------------------DESTRUCTURING ----------------------> It is basically Extracting the property from an array or an object


// let arr = ["Hi","I","am","Rohan"];
//desctructuring
// let [a,b,c,d] = arr;
// let [a,b,,d] = arr;
// let [a,b,c,d,e="karn"] = arr;
// console.log(a,b,c,d,e)

// let obj = {
//     name:"karn tiwari",
//     age: 21,
//     state:"Delhi",
//     country:"India"
// }

// let name = obj.name;
// let state = obj["state"];

// let{name:firstname,age,state,country} = obj;

// console.log(firstname,state,country,age="20")





// let obj = {
//     name: "Rohan Das",
//     add:{
//         city: "Kolkata",
//         country:"India",
//         pin: 700001,
//         State:{
//             code:"DL",
//             name:"Delhi",
//             pin:"12345"
// }
//     }
// }

// let (name) = obj;
// let{add:{country:Bihar}} = obj;
// let {add:{State:{code:cd}}} = obj;
// console.log(cd)







// --------Map and filter function------------