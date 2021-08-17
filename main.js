const button = document.getElementById("btn");
button.addEventListener("click", function () {
    button.innerText = "Click me";
});

//! ----------------------------------------------------------

const hello = document.getElementById("helloBtn");
const html = document.getElementById("htmlBtn");
const css = document.getElementById("cssBtn");
const js = document.getElementById("jsBtn");

hello.addEventListener("click", function () {
    alert("Hello World");
});

html.addEventListener("click", function () {
    alert("HTML is Fun");
});

css.addEventListener("click", function () {
    alert("CSS is Fun");
});

js.addEventListener("click", function () {
    alert("JavaScript is OK");
});

//! ----------------------------------------------------------

const listOfNumbers = document.getElementsByClassName("listItem");

for (let i = 0; i < listOfNumbers.length; i++) {
    listOfNumbers[i].addEventListener("click", function () {
        console.log(listOfNumbers[i].innerText);
    })
}

//! ----------------------------------------------------------

const paragraph = document.getElementById("content");
const clickUp = document.getElementById("upByOne");
const clickDown = document.getElementById("downByOne");
let counter = 0;

clickUp.addEventListener("click", function () {
    counter++;
    paragraph.innerText = counter;
});

clickDown.addEventListener("click", function () {
    counter--;
    paragraph.innerText = counter;
});

//! ----------------------------------------------------------
//! Bank

const customer = [
    {
        id: 311364269,
        name: "Ruti",
        phone: "0504599660",
        email: "rutiayaso@gmail.com",
        balance: 10000
    },
    {
        id: 123456789,
        name: "Ariel",
        phone: "0508837331",
        email: "ariel@gmail.com",
        balance: 7000000
    },
    {
        id: 546789023,
        name: "Shahar",
        phone: "0502729996",
        email: "shahar@gmail.com",
        balance: 30
    },
    {
        id: 234680631,
        name: "Noam",
        phone: "0504606362",
        email: "noam@gmail.com",
        balance: 76900
    }
];


const blockedClients = [1, 300, 24567898, 234680631, 546789023, 1234322, 98909098];

//! ------------------------------------------------------------------

//! 1

function addClient(newClient) {
    if (isBlocked(newClient.id)) {
        alert("Blocked Client!")
        return;
    }
    else {
        customer.push(newClient);
    }
}

//! ------------------------------------------------------------------

//! 2

function findClient(clientId) {
    if (isBlocked(clientId)) {
        alert("Blocked Client!")
        return;
    }
    else {
        for (let i = 0; i < customer.length; i++) {
            if (customer[i].id == clientId) {
                console.log(customer[i]);
                return customer[i];
            }
        }
    }
}

//! ------------------------------------------------------------------

//! 3

function deleteClient(clientId) {
    if (isBlocked(clientId)) {
        alert("Blocked Client!")
        return;
    }
    else {
        for (let i = 0; i < customer.length; i++) {
            if (customer[i].id == clientId) {
                customer.splice(i, 1);
                break;
            }
        }
    }
}

//! ------------------------------------------------------------------

//! 4

function withdrow(clientId, amount) {
    if (isBlocked(clientId)) {
        alert("Blocked Client!")
        return;
    }
    else {
        for (let i = 0; i < customer.length; i++) {
            if (customer[i].id == clientId) {
                customer[i].balance -= amount;
                if (customer[i].balance > 0) {
                    alert("You're current balance is " + customer[i].balance);
                    break;
                }
                else {
                    alert("You don't have enough money");
                    break;
                }
            }
        }
    }
}

//! ------------------------------------------------------------------

//! 5

function deposit(clientId, amount) {
    if (isBlocked(clientId)) {
        alert("Blocked Client!")
        return;
    }
    else {
        for (let i = 0; i < customer.length; i++) {
            if (customer[i].id == clientId) {
                customer[i].balance += amount;
                alert("You're current balance is" + customer[i].balance);
                break;
            }
        }
    }
}

//! ------------------------------------------------------------------

//! 6

function isBlocked(idNumber) {
    for (let i = 0; i < blockedClients.length; i++) {
        if (idNumber == blockedClients[i]) {
            return true;
        }
    }
    return false;
}

//! ------------------------------------------------------------------
//! Get all clients that have more than 400

function moreThan() {
    let richClients = [];
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].balance > 400) {
            richClients.push(customer[i]);
        }
    }
    return richClients;
}

//! ------------------------------------------------------------------
//! Get clients that have less than 200

function lessThan() {
    let poorClients = [];
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].balance < 200) {
            poorClients.push(customer[i]);
        }
    }
    return poorClients;
}

//! ------------------------------------------------------------------
//! Get the first client that have 1,000,000

function firstToMillion() {
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].balance >= 1000000) {
            return customer[i];
        }
    }
}

//! ------------------------------------------------------------------

const fruits = [{
    name: "strawberry", price: 10,
    description: "The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness."
},
{
    name: "banana", price: 20,
    description: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa."
},
{
    name: "apple", price: 15,
    description: "The fruit matures in late summer or autumn, and cultivars exist in a wide range of sizes."
},
{
    name: "watermelon", price: 50,
    description: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit"
},
{
    name: "peaches", price: 25,
    description: "The peach is classified with the almond in the subgenus Amygdalus, distinguished from the other subgenera by the corrugated seed shell."
}];

function expensiveFruit(){
    let max = fruits[0].price; 
    for (let i = 1; i < fruits.length; i++){
        if (fruits[i].price > max){
            max = fruits[i].price;
        }
    }
    return max;
}

function cheapFruit(){
    let min = fruits[0].price; 
    for (let i = 1; i < fruits.length; i++){
        if (fruits[i].price < min){
            min = fruits[i].price;
        }
    }
    return min;
}

function sale(){
    for (let i = 0; i < fruits.length; i++){
        fruits[i].price *= 0.7;
    }
}

