//  Create a function that transforms an array of user objects into the following user
//  object format.

//  Function input example:

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

var formattedUsers =[];

function NameFormat(arr){
    
    var temp=[];
    for (const key in arr) {

        var tempObj={};
        temp[key]=tempObj;

        var concName=arr[key].firstName.concat(' ',arr[key].lastName);
        tempObj.fullName=concName;
        // console.log(tempObj.fullName);

        var dob=new Date(arr[key].dateOfBirth);
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        tempObj.age=Math.abs(age_dt.getUTCFullYear() - 1970);
        // console.log(tempObj.age);

        var address1=arr[key].address;
        var reversedAddress = address1.split(', ').reverse();
        // console.log(reversedAddress);
        
        for (let index = 0; index < reversedAddress.length; index++) {
            
            switch (index) {
                case 0:
                    tempObj.country=reversedAddress[index];
                    break;
                case 1:
                    tempObj.city=reversedAddress[index];
                    break;
                case 2:
                    tempObj.district=reversedAddress[index];
                    break;
                case 3:
                    tempObj.streetName=reversedAddress[index];
                    break;
                case 4:
                    testNo=parseInt(reversedAddress[index])
                    console.log()
                    if (! isNaN(testNo) ) {
                        tempObj.buildingNumber=testNo;
                    }
                    break;   

            }
            
        }
        // console.log(tempObj.country)
        // console.log(tempObj.city)
        // console.log(tempObj.district)
        // console.log(tempObj.streetName)
        // console.log(tempObj.buildingNumber)

    }
    return temp;
}

formattedUsers=NameFormat(detailedUsers);
console.log(formattedUsers);

//   Required function output:

//   var formattedUsers = [
//     {
//       fullName: 'Ahmed Ali',
//       age: 27,
//       country: 'Egypt',
//       city: 'Alexadria',
//     },
//     {
//       fullName: 'Hossam Mohamed',
//       age: 42,
//       country: 'Egypt',
//       city: 'Cairo',
//       district: 'Nasr City',
//     },
//     {
//       fullName: 'John James',
//       age: 47,
//       country: 'Egypt',
//       city: 'Cairo',
//       district: 'Nasr City',
//       streetName: 'Nasr street'
//     },
//     {
//       fullName: 'Tarek Hassan',
//       age: 23,
//       country: 'country',
//       city: 'city',
//       district: 'district',
//       streetName: 'street name',
//       buildingNumber: 15
//     },
//     {
//       fullName: 'Hussein Youssuf',
//       age: 17,
//       country: 'country',
//       city: 'city',
//       district: 'district',
//       streetName: 'street name',
//     }
//   ];
  
//   /**
//    * Notes:
//    * - Address is always in the following format: 'building number, street name, district, city, country'
//    * - Address has at least the city and country, if the rest is missing the missing properties 
//    *   should not exist in the user.
//    * - Age should be an integer. If age is float, ignore the fraction and do not round, for 
//    *   example, 23.95 should be 23.
//    * - buildingNumber should be a number not a string, if buildingNumber is not a valid number,
//    *   it should be ignored.
//    * - The original array should remain unchanged.
//    */