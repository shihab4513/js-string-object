let sentence='I want to learning Dev';
let reverse='';
for(const x of sentence){
    reverse=x+reverse;
}
console.log(reverse);
const reversed=sentence.split('').reverse().join('');
console.log(reversed);