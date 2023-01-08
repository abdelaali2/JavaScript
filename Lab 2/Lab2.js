/*
  1. Calculate the average age of the formatted users of the previous lab only for users who
     are less than 40 years old.
     Use the reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/


var Users = [
    {
        fullName: 'Ahmed Ali',
        age: 27,
        country: 'Egypt',
        city: 'Alexadria',
    },
    {
        fullName: 'Hossam Mohamed',
        age: 42,
        country: 'Egypt',
        city: 'Cairo',
        district: 'Nasr City',
    },
    {
        fullName: 'John James',
        age: 47,
        country: 'Egypt',
        city: 'Cairo',
        district: 'Nasr City',
        streetName: 'Nasr street'
    },
    {
        fullName: 'Tarek Hassan',
        age: 23,
        country: 'country',
        city: 'city',
        district: 'district',
        streetName: 'street name',
        buildingNumber: 15
    },
    {
        fullName: 'Hussein Youssuf',
        age: 17,
        country: 'country',
        city: 'city',
        district: 'district',
        streetName: 'street name',
    }
];


// Write the implementation of reducerFunc.
var ageArr=[];
function reducerFunc(sum) {
    var i=0;
    sum=0;
    for (let index = 0; index < Users.length; index++) {

        if (Users[index].age<40) {
            ageArr[i]=Users[index].age;
            sum+=Users[index].age;
            i++;
        }
    }
    return sum/i;
}

var average = Users.reduce(reducerFunc);
// var average = Users.reduce((sum,start) => sum+=start/ageArr.length,0);
console.log(average)

/*
  2. Calculate the number of occurrences of all characters including numbers and white 
     spaces in a string. The string may contain: numbers, upper and lower-case letters and 
     white spaces. 
     Ignore the character case, for example, 'aA' should be counted as 2 occurrences
     of the a character.
*/

// Example input
const input = 'abbflmffchocC19 ieqvh';
let modified=input.toLocaleLowerCase();

var count=0;
[...modified].forEach(letterCounter);

function letterCounter(letter,i,arr){

    count=0;

    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index]===letter)
        {
            if (letter===' ') {letter='White space'}
            count++;
        }
    }
    
    switch (count) {

        case 1:
            console.log(`${letter} occurred once.`)
            break;
            
        case 2:    
            console.log(`${letter} occurred twice.`)
            break;
            
        default:
            console.log(`${letter} occurred ${count} times.`)
            break;
    }

}


/* Output should be exactly like this in the console.
    1 ocurred once
    9 ocurred once
    a ocurred once
    b ocurred twice
    f ocurred 3 times
    l ocurred once
    m ocurred once
    c ocurred 3 times
    h ocurred twice
    o ocurred once
    White space ocurred once
    i ocurred once
    e ocurred once
    q ocurred once
    v ocurred once
*/