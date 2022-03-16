// Method1 : Using loops
function titleCase(str) 
{
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(titleCase("I'm a first tea pot"))

// Method2: Using map
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(titleCase("I'm A second tea pot"));

// Method3: Using map and reduce
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(titleCase("I'm A third tea pot"));
 