var a = "Abuzar";
var b = "Sameel";
var c = "Faheem";
var d = "Zouraiz";
var e = "Muneer";
var f = "Shahroz";
var g = "Huzaim";
var h = "Maaz";
var i = "This is string";
var temp = `${a} Grandfather hai ${b }  ${c }  ${d } ${e } ${f } ${g } ${h } ka `
console.log(temp)
var len = a.length;
console.log(`lenght of a variable is ${len}`);
console.log('Hello\nAbuzar');
//index of st in (var i = "This is (st)ring";) this var i 
var j = i.indexOf('st'); 
console.log(j);
//substring from a string
//slice of index b/w 8,15 ("This is string") which is string started with 0
var k = i.slice(8,15);
console.log(k);
//if you want to replaced string with abuzar or any other name so...
var replaced = i.replace('string','Abuzar');
console.log(replaced);
// if you want your text to upper case simply you have to use uppercase function()...
console.log(i.toUpperCase());
 // if you want your text to lower case simply you have to use lowercase function()...
 console.log(i.toLowerCase());
//  if you want to add two different string so you can use concat function()...
var L = " New string ";
console.log(i.concat(L)); 
//how do you know about that at which index which character is charAt() function is used...
// i is a variable in which ("this is string") value is saved... 
var char = i.charAt(3); //At 3 index there is 's' character 
console.log(char);
//