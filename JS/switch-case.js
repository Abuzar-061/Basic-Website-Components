//built in funtion of Date...
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    document.getElementById("demo1").innerHTML= "Enjoy Weekend";
    break;
  case 1:
    day = "Monday";
    document.getElementById("demo1").innerHTML= "Work Hard";
    break;
  case 2:
    day = "Tuesday";
    document.getElementById("demo1").innerHTML= "Work Hard";
    break;
  case 3:
    day = "Wednesday";
    document.getElementById("demo1").innerHTML= "Work Hard";
    break;
  case 4:
    day = "Thursday";
    document.getElementById("demo1").innerHTML= "Work Hard";
    break;
  case 5:
    day = "Friday";
    document.getElementById("demo1").innerHTML= "Work Hard";
    break;
  case 6:
    day = "Saturday";
    document.getElementById("demo1").innerHTML= "Enjoy Weekend";
}
document.getElementById("demo").innerHTML = "Today is " + day;
document.write("<br>");
/* ---------------------------New Switch-Case------------------------------- */
var cups = 1;
switch (cups) {
  case 0:
    console.log("Case 0 is open");
    break;

  case 1:
    console.log("Case 1 is open");
    break;

  case 2:
    console.log("Case 2 is open");
    break;

  case 3:
    console.log("Case 3 is open");
}
