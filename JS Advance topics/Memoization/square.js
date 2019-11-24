let caching = [];
let numb = 9000000000;
function sq(n) {
    let output = 0;
    if(caching[n] != null) {
        return caching[n]
    }
for(let i = 0; i< n; i ++) {
    output = output + n;
}
caching[n] = output;

return output; 
}

console.log(sq(numb));
console.log(sq(numb));
console.log(sq(numb));
console.log(sq(numb));
console.log(sq(numb));