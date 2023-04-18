// JSON - Javascript Object Notation

const thisisJSON = {
    'name': 'Martin Joosep Reiljan',
    'age': 200,
}

// if statements are shorthand expressions

let year = prompt('Kui vana sa oled?');

//Shorthand version

/*

let years = prompt('Kui vana sa oled?');
const vastus = years === '2005' ? 'õige vastus, tubli mees.' : 'Puhta mõõda';
alert(vastus);

*/


//switch statements

switch(year) {
    case'2005':
        alert('Pihtas põhjas.')
        break;
    case'2010':
        alert('Nah bro')
        break;
    default:
        alert('mõõda')
        break;
}