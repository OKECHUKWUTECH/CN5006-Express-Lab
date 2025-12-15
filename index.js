// Definition of the function EmployeeInfo
function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + ", your monthly salary is " + salary);
}

console.log("This is my first program");

// Variables
var EmpName = "John";
var EmpSalary = 50000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);
//Code for Second Exercise starts from here: 
const EmpSkills= (skills)=> { 
  console.log("Expert in "+ skills) 
} 
EmpSkills("java") 

// Import modules (CommonJS)
const student = require('./StudentInfo'); // expects functions & variables
const Person = require('./Person');       // expects a class export

// Using exported functions/variables from StudentInfo
console.log("Student Name: " + student.getName()); // getName is a function
console.log(student.Location());                   // Location is a function
console.log(student.dob);                          // dob is a variable, no parentheses

// Calling StudentGrade with a parameter
console.log("Grade is " + student.StudentGrade(55));

// Create a new Person instance and use its method
const person1 = new Person("Jim", 30, "myemail@gmail.com"); // adjust args to match your class

console.log("Using Person Module:", person1.getPersonInfo());

// End of index.js

os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end")