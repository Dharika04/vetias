// \Arithmetic operators
var a=10;
var b=40;
console.log("Arithmetic operator");
console.log(a+b); //addition
console.log(a-b); //subtraction
console.log(a*b); //multiplication
console.log(a/b); //division
console.log(a%b); //modulos
console.log(a**b); //exponent 

//Assignment operator
var a=50;
console.log("Assignment operator");
console.log(a+=5); //addition assignment 
console.log(a-=5); //subtraction assignment 
console.log(a*=5); // multiplication assignment
console.log(a/=5); // division assignment 
console.log(a%=5); // mmodulo assignment 
console.log(a**=5); // exponent assignment 

// Comparison operator 
console.log("Comparison operator");
console.log(a==b); //equal to
console.log(a!=b); //not equal to
console.log(a<=b);  // less than or equal to 
console.log(a>=b);  // greater than or equal to
console.log(a>b); // less than
console.log(a>b); // greater than

// logical operator
console.log("logical operator");
console.log(a>10 && b>30); //logical And
console.log(a>10 || b>30); //logical or
console.log(!a>10); //logical not 


// Unary operator
console.log("unary operator");
console.log(a++);
console.log(a--);
console.log(--a);
console.log(++a);


// Conditional/Ternary operator
console.log("Conditional operator");
var result=(a>b)? "a is greater" : "b is greater";
console.log(result);