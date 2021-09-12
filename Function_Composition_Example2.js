const eater = function(state) {
    return {
        eat: function(amount) {
            console.log(`${state.name} is eating.`);
            state.energy += amount;
            console.log(`${state.name} has ${state.energy} energy now!`);
        }
    }
}
const sleeper = function(state) {
    return {
        sleep: function(length) {
            console.log(`${state.name} is sleeping.`);
            state.energy += length;
        }
    }
}
const player = function(state) {
    return {
        play: function() {
            console.log(`${state.name} is playing.`);
            state.energy -= length;
        }
    }
}
const barker = function(state) {
    return {
        bark: function() {
            console.log(`${state.name} says Woof Woof!!`);
            state.energy -= .5;
        }
    }
}
const meower = function(state) {
    return {
        meow: function() {
            console.log(`${state.name} says MEEEOOWW!!`);
            state.energy -= .5;
        }
    }
}
const adopter = (state) => {
    return {
        adopt: function(...pets) {
            pets.forEach((pet) => {
                state.pets.push(pet);
            })
        }
    }
}
const friender = (state) => {
    return {
        befriend: function(friend) {
            state.friends.push(friend);
        }
    }
}

function Dog(name, energy, breed) {
    let dog = {
        name: name,
        energy: energy,
        breed: breed,
    }
    return Object.assign(
        dog,
        eater(dog),
        barker(dog),
        player(dog),
        sleeper(dog),
    )
}

function Person(name, energy) {
    let person = {
        name: name,
        energy: energy,
        pets: [],
        friends: []
    }
    return Object.assign(
        person,
        eater(person),
        player(person),
        adopter(person),
        sleeper(person),
        friender(person)
    )
}
const leo = Dog('Leo', 10, 'German Shepard'); 
const lassie = new Dog('Lassie', 25, 'Golden Retiever') // Create a new "Dog" object named "lassie"
const chuck = new Person('Chuck', 50); // Create a new "Person" object named "chuck"
console.log(leo);
console.log(lassie);
leo.bark(); // Leo says Woof Woof!
lassie.play(); // Lassie is playing
lassie.bark(); // Lassie says Woof Woof!
console.log(lassie.energy); // 24.5
lassie.eat(15); // Lassie is eating, Lassie has 39.5 energy now!
console.log(lassie.energy); // 39.5
lassie.sleep(5); // Lassie is sleeping
console.log(lassie.energy); // 44.5
console.log(chuck.energy); // 50
chuck.adopt('cat', 'rat', 'horse') // Adds cat, rat and horse to the chuck object pets array
chuck.adopt('dog')// Add a dog to the chuck objects pets
console.log(chuck.pets) // ['cat','rat','horse','dog']
