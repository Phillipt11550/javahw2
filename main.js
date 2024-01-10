let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function displayFavoriteFoods(person) {
    for (let food in person) {
        if (Array.isArray(person[food])) {
            console.log(food + ": " + person[food].join(", "));
        } else if (typeof person[food] === 'string') {
            console.log(food + ": " + person[food]);
        } else if (typeof person[food] === 'object') {
            for (let shake in person[food][0]) {
                console.log(shake + ": " + person[food][0][shake]);
            }
        }
    }
}

// Call the function with the person3 object
displayFavoriteFoods(person3);


// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = (years = 1) => {
        this.age += years;
    };
}

// Create two people using the 'new' keyword
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

// Print both of their infos
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge(3);
person1.printInfo();


function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small number");
        }
    });
}

// Usage:
checkStringLength("Hello, World!")
    .then(message => console.log(message))
    .catch(error => console.error(error));