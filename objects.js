// let person = {
//     name: "cassandra",
//     lastName: "curcio",
//     age: 30,
//     inClass: true,
//     classesTaught: ['Javascript', 'arrays']
// }
// console.log(person.name)
// console.log(person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.classesTaught[0]);
// person.name = "Cassichan";
// console.log(person.name);
// delete person.name;
// console.log(person);

// let {name, age} = person;
// console.log(name);
// console.log(age);


//Object constructor?
// const allProps = Object.keys(person);
// console.log(allProps);
// Outputs an array of the object person's properties


// console.log(allProps.indexOf("age"));
//Returns index of "age"

// const hasAge = allProps.indexOf("age") > -1;
// console.log(hasAge)
//Returns true or false. -1 would be undefined so any value above this value should be the index of an element in the array.


// person.name = "Cassichan"; //edit property
// person.hasGlasses = true; //add a new property
// console.log(person);
// person.age = 35; //edit property
// console.log(person);


// Lab 1 - Object

// Create an object that will include a student's info with the following values:
// - Name (with your own name)
// - Age (with any age)
// - inClass (having a boolean value stating if you're in class or not)

// Now do the following with the oject:
// - Display the object to the user (on the screen)
// - Display just the name of the student variable 
// - Change "Age" another number.
// - Display the student's Age 

// const student = {
//     name: "Cassandra",
//     age: 30,
//     inClass: true
// }

// console.log(student);
// console.log(student.name);
// student.age = 18;
// console.log(student.age);

// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

// const teacher = {
//     name: "Damian",
//     classes: [],
//     currentlyTeaching: true
// }

// teacher.classes.push("Objects");
// teacher.classes.push("Javascript");
// console.log(teacher.name);
// console.log(teacher.classes);
// console.log(teacher);

// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.

let TeacherAssistant = {
    Name: "Maria",
    inClass: true,
}

console.log(TeacherAssistant);
TeacherAssistant.Classes = [];
TeacherAssistant.Classes.push("Strings");
console.log(TeacherAssistant);


let TeacherAssistants = []
TeacherAssistants.push(TeacherAssistant);
console.log(TeacherAssistants);

let TeacherAssistant2 = {
    Name: "Manny",
    inClass: false,
}

TeacherAssistants.push(TeacherAssistant2)
console.log(TeacherAssistants);

console.log(TeacherAssistants[1].Name);







//can also do a loop below?
// let arrayOfFruit = ['apple', 'banana', 'kiwi'];

// function (fruit) {
//  if (indexOf(fruit) < -1;) {
//     return arrayOfFruit.push(fruit);
//  } else {
//     return 
//  }
// }