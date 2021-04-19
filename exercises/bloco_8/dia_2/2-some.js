const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];


//tem alguma pessoa menor de idade? //lessThan18

const lessThan18 = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 18) {
            return true;
        }        
    }
    return false;
}

const lessThan18ForEach = (array) => {
    return array.some(age => age < 18);
}

console.log(lessThan18(ages));
console.log(lessThan18(moreAges));

console.log(ages.some(age => age < 18));