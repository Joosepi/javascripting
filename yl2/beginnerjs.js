// Objects

const car = {
    mark: 'Ferrari',
    model: 'Ferrari S9',
    transmission: 'Manual',
    type: 'Driveable',
    color: {
        black: 500
    },
};

const numbers = [1,2,3,4,5];
const birthDay = '12';
const birthdaymonth = 'June';

console.log(typeof birthDay)  // näidab andmetüüpi

console.log(new Date());
console.log(Math.random());
console.log(typeof Number(birthdaymonth));

// Adding to object
car.motor = '200kw'


// new section 2 - Explicit vs Implicit

// Basic operators

/**
 * = on väärtuse andmine muutujale
 * == väärtused on võrdsed
 * === väärtused ja andmetüübid on võrdsed
 * + liitmine (ühekaupa liitmise operaator ++ => i++)
 * - lahutamine
 * / jagamine
 * * korrutamine
 * % (reminder) jääk
 * ** astendamine
 */

// Data structures - Map vs Set

const contacts = new Map();

contacts.set('Joosep',{phone: '67527251', aadress:'Ametikoolo'});
contacts.has('Joosep');
contacts.get('Joosep');
contacts.set('Audi', {model: 'S9'});
contacts.delete('Audi');
console.log(contacts.size)

const mySet = new Set();

mySet.add('1');
mySet.add({ a: 1, b: 2});
mySet.add(true);

console.log(mySet)