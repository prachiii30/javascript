const myNums=[1,2,3,4,5,6,7,8,9,10];

const newnums=myNums.filter((num)=> num>5 ) //for each does not return value but filter does  sinxe no {} we do not require return keyword

console.log(newnums)

const newNums=myNums.filter((num)=> {
    return num>5    //requires return keyword
 } ) 
console.log(newNums)

const books=[
    {
        title: "book one", 
        genere:"Fiction",
        publish:"1981",
        edition:"2004"
    },
    {
        title: "book two", 
        genere:"Fiction",
        publish:"1983",
        edition:"2005"
    },
    {
        title: "book three", 
        genere:"science",
        publish:"1341",
        edition:"2001"
    },
    {
        title: "book four", 
        genere:"si-fi",
        publish:"1981",
        edition:"2014"
    },
    {
        title: "book five", 
        genere:"Fiction",
        publish:"1982",
        edition:"2019"
    },
    {
        title: "book six", 
        genere:"Non-Fiction",
        publish:"1985",
        edition:"2014"
    },
    {
        title: "book seven", 
        genere:"Fiction",
        publish:"1921",
        edition:"2014"
    },
    {
        title: "book eight", 
        genere:"Non-Fiction",
        publish:"1989",
        edition:"2014"
    },


]
const userBooks=books.filter((bk)=> bk.genere==="Non-Fiction")
console.log(userBooks)
console.log('-----------')
const bp=books.filter((bk)=>bk.edition>2000 && bk.genere==="Non-Fiction")
console.log(bp)