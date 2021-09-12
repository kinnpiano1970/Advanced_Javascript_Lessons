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
const lassie = new Dog('Lassie', 25, 'Golden Retiever')
const chuck = new Person('Chuck', 50);
console.log(leo);
console.log(lassie);
leo.bark();
lassie.play();
lassie.bark();
console.log(lassie.energy);
lassie.eat(15);
console.log(lassie.energy);
lassie.sleep(5);
console.log(lassie.energy);
console.log(chuck.energy);
chuck.adopt('cat', 'rat', 'horse')
chuck.adopt('dog')
console.log(chuck.pets)
