'use strict';

function Phone(model, company, price, color, comments, isAvailable ) {
    this.model = model;
    this.company = company;
    this.price = price;
    this.color = color;
    this.comments = comments;
    this.isAvailable = isAvailable;
}
let phones = [];

function getColor() {
    let random = Math.random();
    if (random >= 0.6) {
        return "red";
    }

    if (random >= 0.4) {
        return "white";
    }

    if (random >= 0.2) {
        return "red";
    }

    return "silver";
}

function getCompany() {
    let random = Math.random();
    if (random >= 0.5) {
        return "Huawei";
    }

    if (random >= 0.4) {
        return "Samsung";
    }

    if (random >= 0.2) {
        return "Apple";
    }

    return "Xiaomi";
}

for (let i = 1; i <= 50; i++) {
    phones[i-1] = new Phone(`model ${i}`, getCompany(), i*1500, getColor(), [{name:"string"}], Math.random() >= 0.5);
}

function isAvailableNumber(array) {
    let value = 0;
    array.forEach( function(item) {
        if (item.isAvailable) {
            value++;
        }
    });
    return value;
}

function isAvailable(array) {
    return array.filter( (item) => item.isAvailable);
}

function sales(array) {
    return array
    .filter( (item) => item.isAvailable)
    .map( function(item) {
        if(item.price >= 30000) {
            item.price = Math.round(item.price*0.7);
        }
        
        return item;
    });
}

function showAllPhones(array) {
    array.forEach( (item) => console.log(`<${item.company}><${item.model}> со стоимостью <${item.price}> сейчас ${ (item.isAvailable ? "Есть в наличии" : "нет в наличии")}`));
}

function priceSort(array) {
    return array.sort( (a,b)=>b.price-a.price );
}
