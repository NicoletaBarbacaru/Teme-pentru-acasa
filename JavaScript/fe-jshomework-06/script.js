// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
//an amount needed and whether it is bought or not. Write a few functions for working with this array. 

// Display the entire list, so that the not yet purchased items go before the bought ones. 
// Adding a purchase to the list. 
//Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
// Purchasing a product. The function accepts the name of a product and marks it as bought.

let products = [
    {
        name:"bread",
        amount:2,
        isPurchased:false
    },
    { 
        name:"milk",
        amount:1,
        isPurchased:false

    },
    { 
        name:"cheese",
        amount:3,
        isPurchased:true
    },
    { 
        name:"cake",
        amount:1,
        isPurchased:false
    },
    { 
        name:"tomatoes",
        amount:1,
        isPurchased:true
    }
]

for ( let i = 0; i < products.length; i++){

    console.log(products[i])
}
// Display the entire list, so that the not yet purchased items go before the bought ones. 
products.sort((a, b)=> a.isPurchased - b.isPurchased);
console.log(products);
let initialArr= [...products];
console.log(initialArr)

// class product {
// constructor(name,amount,isPurchased){
//     this.name = name;
//     this.amount = amount;
//     this.isPurchased = isPurchased
//  }
// }
// products.push(new product("fruits", 2, false));

// Adding a purchase to the list. 
//Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
let newProduct = {};
    newProduct.name = "fruits";
    newProduct.amount = 1,
    newProduct.isPurchased = false;

// function add(newProduct){
//     return products.push(newProduct)
// }
// add(newProduct);

let newProduct1 = {name:"bread",amount:1,isPurchased:false}

// const existingProduct = products.find((product) => newProduct1.name === product.name);
// if(existingProduct){
//     existingProduct.amount++
// } else {
//     products.push(newProduct1)
// }
const addItem = (newItem)=>{
    function itemFiltered(item){
        return item.name === newItem.name
    }
    const existingItems = products.filter(itemFiltered);
    if(existingItems.length > 0){
        existingItems[0].amount += newItem.amount
    } else {
        products.push(newItem)
    }
}
const shopItem = {name:"cake", amount:1,isPurchased:false}
const shopItem1= {name: "sweets", amount:3, isPurchased:true}
const shopItem2= {name: "bread", amount:2, isPurchased:false}
console.log(shopItem)
addItem(shopItem);
console.log(products);
console.log(shopItem1);
addItem(shopItem1);
console.log(products);
console.log(shopItem2);
addItem(shopItem2);
console.log(products);

// Purchasing a product. The function accepts the name of a product and marks it as bought
const purchasedProduct = (productName)=> {
    for(let i = 0; i < products.length; i++){
        
        products[i].isPurchased = true;
    }
}