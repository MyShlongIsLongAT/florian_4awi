let items = [
    {name: 'Bike',price:100},
    {name: 'TV',price:200},
    {name: 'Album',price:10},
    {name: 'Book',price:5},
    {name: 'Phone',price:500},
    {name: 'Computer',price:1000},
    {name: 'Keyboard',price:25},
]

//filter-method
let filteredItems = items.filter((item)=>{
    return item.price <= 100;
})

console.log(filteredItems);

//map-method
let mappedItems = items.map((item)=>{
    return item.name;
})

console.log(mappedItems);

//find-method
let foundItems = items.map((item)=>{
    return item.name==="Book";
})

console.log(foundItems);

//for-each-method
items.forEach((item)=>{
    console.log(item.name)
})

//some-method
let hasInexpensiveItems = items.some((item)=>{
    return item.price<=100
})

console.log(hasInexpensiveItems);

//every-method
let hasInexpensiveItemsEvery = items.every((item)=>{
    return item.price<=1000
})

console.log(hasInexpensiveItemsEvery);

//reduce-method
let total = items.reduce((currentTotal,item)=>{
    return item.price + currentTotal
},0)

console.log(total);

//includes-method
const numberArray = [1,2,3,4];

let includesNumber = numberArray.includes(1);

console.log(includesNumber);

