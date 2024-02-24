// Define a function to greet the user
function greetUser(name) {
    console.log("Hello, " + name + "! Welcome to our website.");
}

// Call the greetUser function with a name
greetUser("John");

// Define an object representing a car
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    drive: function() {
        console.log("The " + this.color + " " + this.make + " " + this.model + " is driving.");
    }
};

// Call the drive method of the car object
car.drive();
