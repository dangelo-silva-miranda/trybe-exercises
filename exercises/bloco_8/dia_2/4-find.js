const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true},
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false},
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
];

// encontrar a primeira pessoa que não é motorista // findANonDriver
const findANonDriver = (array) => {
    return array.find(person => person.isDriver === false);
}

console.log(findANonDriver(users));

const find = (array, callbackfn) => {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (callbackfn(value, index, array) === true) {
            return value;
        }        
    }
    return undefined;
}

console.log(find(users, (user) => user.isDriver === false));