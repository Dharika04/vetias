let studentcount=10
studentcount=11
console.log("student count:","studentcount")

//const
const collegename="vetias"
console.log("college name:",collegename)



//Template literals
let studentname="arun";
console.log(`welcome ${studentname}to ${collegename}`)



//object
const student ={
    name:"arun",
    age:20,
    dept:"it"
};
console.log(student);


//destructuring
const{name,age,dept} = student;
console.log("name:",name);
console.log("age:",age);
console.log("dept:",dept)


//Arrow function
const displaystudent = () => {
console.log(`student name: ${name}`);
};
displaystudent();



//Arrays
const students = [
    "arun",
    "priya",
    "vijay"
];
console.log(students);



//spread operator
const updatedstudents = [
    ...students,
    "vijay"
];
console.log(updatedstudents);



//Rest operator
function maximummarks(...marks) {
    let max = Math.max(...marks)
    return max;
}
console.log("maximum marks:",maximummarks(80,90,70));
