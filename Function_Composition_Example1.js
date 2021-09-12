const eater = (state) => ({
    eat(amount) {
        console.log(`${state.name} is eating.`);
        state.energy += amount;
    }
})
const sleeper = (state) => ({
    sleep(length) {
        console.log(`${state.name} is sleeping.`);
        state.energy += length;
    }
})
const player = (state) => ({
    play() {
        console.log(`${state.name} is playing.`);
        state.energy -= length;
    }
})
const barker = (state) => ({
    bark() {
        console.log('Woof Woof!!');
        state.energy -= .1;
    }
})
const meower = (state) => ({
    meow() {
        console.log('Meow');
        state.energy -= .1;
    }
})
const adopter = (state) => ({
    adopt(pet) {
        state.pets.push(pet);
    }
})
const friender = (state) => ({
    befriend(friend) {
        state.friends.push(friend);
    }
})

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
// console.log(Dog);
const leo = Dog('Leo', 10, 'German Shepard');
const lassie = new Dog('Lassie', 25, 'Golden Retiever')
console.log(leo); // { breed: "German Shephard", energy: 10, name: 25 }
console.log(lassie); // { breed: "Golden Retriever", energy: 25, name: "Lassie" }
console.log(lassie.energy); // 25
lassie.eat(15); // Lassie is eating
console.log(lassie.energy); // 40
