# JavaScript

Lab 1 Exercise:

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


Lab 2 Exercise:

    /*
      1. Calculate the average age of the formatted users of the previous lab only for users who:
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

Lab 3 Exercise:

    /*
      1.
      Create a method for all arrays to sum an array of numbers.
      If any element in the array is not a number, the method should
      throw an error with a message: 'Target array must contain numbers only'.
      [ 1, 2, 3].sum() // Output: 6
    */

    /*
      2. When trying to convert an object to string, the output is always '[object object]'.
      a. Change the default output for all objects to be 'This is an object'.

      const obj = {};
      String(obj); // Output: 'This is an object'.

      // b. Make String(obj) of only the following object return the content of the message
      // while the all other objects still return 'This is an object'.
      const obj = { message: 'This is a message' };
      String(obj) // Output: 'This is a message'.
    */

    /*
      3.
      a. You're developing a game which has different types of animals. All animals can walk, run,
      eat and attack. They also have color and weight properties.
      The game also has birds which do all these actions in addition to flying.
      Represent this data using OOP. 
      
      Notes:
      - Write the code twice; using ES5 function constructors and using ES6 classes.
      - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
      or write a console.log statement inside each of them.
      - Maintain the count of all created animals in the code and limit the number of
      total created animals to 100. Throw an error if the code tries to create the 101st animal.

      b. Write a function that detects whether an animal is a bird or not.
      isBird(animal) // Output: true or false.
    */


Lab 4 Exercise:
    /* 
      Create a chess vision game like the one in this link: https://www.chess.com/vision

      Required Features:
        - The user clicks on the 'start' button, after that, a timer of 30 seconds starts.
        - During these 30 seconds, the game asks the user to click on a random square by telling
        the coordinates of this square as domenstrated in the link.
        - The user should click on the correct square.
        - If the clicked square matches the wanted square, it's considered a correct answer, and
        a green check mark is written next to it the the results section.
        - If it's wrong, a red cross mark is written next to it.
        - The score is always displayed and gets updated after every answer.
        - After the 30 seconds elapse, the board should not accept any clicks. and the final score
        is displayed.
        - The style of the page can be different from that in the link.

      Bonus Features:
        - Create two modes for the game. One for white, where the bottom row is considered the "1" row
    */

