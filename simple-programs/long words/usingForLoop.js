// 1. Find the Longest Word With a FOR Loop
function longestWord(word){
 wordSplit = word.split(' ');
 for (let index = wordSplit.length-1; index >=0; index--) {
     const element = wordSplit[index];
     highLengthWord ='';
     if(element.length > highLengthWord.length)
     {
highLengthWord= element;
     }
     return highLengthWord
 }

}
console.log(longestWord("brownBag is first brownBag"))