function reverse(sentence) {
   stringSplit = sentence.split(" ");
   var longestWord = stringSplit.sort(
       function(a,b){
           return b.length - a.length
       }
   );
   return longestWord.toString();
}
console.log(reverse("The quick brown fox jumped over the lazy dog"))