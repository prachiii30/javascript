//object de-structure and JSON API intro

 const course={
    name:"javaScript",
    cost:"999",
    instructor:"Prachi"
 }

 console.log(course["name"]); //this becomes tedious we want to use this again and again

 //instead we can do this""""" known as destructuring
 const{name} = course;
 const{instructor :i}=course; //i is the alias name **********imp
 console.log(i);


//Json =>object without name keys and value both are string 
// {
//     "name":"prachi",
//     "middle name":"singh"
// }

//we can get response from API(ex=randomuser me api) in the following ways-
// JSON
// array of objects
