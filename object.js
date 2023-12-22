function createInstructor(firstname, lastname){
    return {firstname, lastname}
}

let favoriteNumber = 42;

const instructor = {
    firstname: 'Colt',
    [favoriteNumber]: "Thats my favorite!"
}


const instruct = {
    firstname: 'Colt', 
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return `${this.firstname} ${' says bye!'}`
    }
}



function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

const d = createAnimal('dog', 'bark', 'Wooof');
const s = createAnimal('sheep', 'bleet', 'BAAAAAAAAA');