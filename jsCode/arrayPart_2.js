const marverls=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];

marverls.push(dc_heroes);
// console.log(marverls); // displays array inside array

const newarr=marverls.concat(dc_heroes);
console.log(newarr);

const allhero=[...marverls,...dc_heroes]; //spread
console.log(allhero);

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5,]]];
const Anotherarr=anotherarr.flat(Infinity); //merges all the sub array into one array
console.log(Anotherarr);

//mostly used in scraping
console.log(Array.isArray("PRACHI"));
console.log(Array.from("Prachi"));

console.log(Array.from({name:"Prachi"})); //returns empty array need to define whose array we need either of keys or values

let s1=200;
let s2=100;
let s3=120;

console.log(Array.of(s1,s2,s3));
