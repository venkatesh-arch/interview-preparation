var name="Hello";

/* Method1 : Using reverse method -Reverse a String With Built-In Functions
function reverseString(name){ 
return name.split("").reverse().join("");
}

console.log(reverseString(name)) */

/* Method2: Using array -Reverse a String With a Decrementing For Loop */
var element ="";
function reverseString(name){
for (var index = name.length-1; index >= 0; index--) {
      element += name[index];
}
return element
}
console.log(reverseString(name)) 
 

