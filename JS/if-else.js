  //if else condition and take input from user
  var num = prompt("Enter Your marks");
  if (num >= 50) {
    document.write("Student Passed");
  } else {
    document.write("Student Failed");
  } 
  document.write("<br>")
  
  // single if condition 
  
  var numb = 60
  if (numb >= 50) {
    document.write("Student Passed");
  }
  // let is used as a block scope
  // var is used as a function scope
  let a = "Abuzar";{
    console.log(a)
  }
  //const value can not be changed 
  const b = "this can not be changed";
  // b = "Showing error bcz of const";
  console.log(b);
  // ... ="<br>"" is used for line break in js 
  document.write("<br>")
  // double conditional if else else if
  let age = 18;
  if (age > 18) {
    document.write("Yes you are +18");
  }
  // we use (age == 18)bcz if we use (age = 18)it assign 18 as a value to age   
  else if(age==18){
    document.write("You are 18 years old");
  }
   else {
    document.write("You are not +18");
  } 