# JavaScript

Lab 1 Excersice:
    
    Create a function that transforms an array of user objects into the following user object format.

    Function input example:
    var detailedUsers = [
      {
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1995-10-10',
        address: 'Alexadria, Egypt'
      },
      {
        firstName: 'Hossam',
        lastName: 'Mohamed',
        dateOfBirth: '1980-05-10',
        address: 'Nasr City, Cairo, Egypt'
      },
      {
        firstName: 'John',
        lastName: 'James',
        dateOfBirth: '1975-03-05',
        address: 'Nasr street, Nasr City, Cairo, Egypt'
      },
      {
        firstName: 'Tarek',
        lastName: 'Hassan',
        dateOfBirth: '1999-12-03',
        address: '15, street name, district, city, country'
      },
      {
        firstName: 'Hussein',
        lastName: 'Youssuf',
        dateOfBirth: '2005-12-03',
        address: 'abc, street name, district, city, country'
      }
    ];

    // Required function output:
    var formattedUsers = [
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

    /*
     * Notes:
     * - Address is always in the following format: 'building number, street name, district, city, country'
     * - Address has at least the city and country, if the rest is missing the missing properties 
     *   should not exist in the user.
     * - Age should be an integer. If age is float, ignore the fraction and do not round, for 
     *   example, 23.95 should be 23.
     * - buildingNumber should be a number not a string, if buildingNumber is not a valid number,
     *   it should be ignored.
     * - The original array should remain unchanged.
     */
     
Lab 2 Excersice:

    /*
      1. Calculate the average age of the formatted users of the previous lab only for users who
         are less than 40 years old.
         Use the reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    */

    // Write the implementation of reducerFunc.
    function reducerFunc() {

    }

    var average = formattedUsers.reduce(reducerFunc);

    /*
      2. Calculate the number of occurrences of all characters including numbers and white 
         spaces in a string. The string may contain: numbers, upper and lower-case letters and 
         white spaces. 
         Ignore the character case, for example, 'aA' should be counted as 2 occurrences
         of the a character.
    */

    // Example input
    var input = 'abbflmffchocC19 ieqvh';

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
