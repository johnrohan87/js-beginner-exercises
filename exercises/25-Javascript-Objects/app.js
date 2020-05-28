var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers

  var familySize = family.members.length;
  var tmpInt = 0;

  for (i = 0; i < family.members.length; i++){
        
        var luckyNumbersLen = family.members[i].lucky_numbers.length;
        //console.log(luckyNumbersLen);

        for (j=0;j<luckyNumbersLen;j++){
            tmpInt = tmpInt + family.members[i].lucky_numbers[j];
            //console.log(tmpInt);
        };

    };
  
  return tmpInt;
}

//Enter all your code here:
person.lucky_numbers[3] = 33;

var person3 = {};
person3.name = "Jimmy"; 
person3.lastname =  "Doe";
person3.age = 13;                     
person3.gender = "male";
person3.lucky_numbers = [ 1, 2, 3, 4];
person3.significant_other = null;



family.members.push(person3);

//console.log("family-members:");
//console.log(family.members);

//let total = sum_int(family.members);
//console.log(total);


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 