//for of
//mostly array specific loops


//in arrays
const arr=[8,2,3,4,5] 
for(const index of arr){  //
    console.log(index)
}

//Maps contains unique key value pair map it is an object

//in maps
const map=new Map()
map.set('in','India')
map.set('FR','France')
map.set('usa','United states of America')
console.log(map);

for(const [key,value] of map){
    console.log(key)
}

//in objects
const obj={
    'game1': 'NFS',
    'game2' : 'Spiderman'
}

//we cannot over objects using for of loop

const obj1={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in obj1){
    console.log(key);
    console.log(key, obj1[key])
}

//for in loop can be used in obj and arr 

const arre=["prachi","sherya","shruti"]
for( const i in arre ){
    console.log(i);
    console.log(arre[i])
}


//for each loop

const coding=['ruby','js','cpp','java','python']

coding.forEach( (element)=>{
    console.log(element)
})

function printMe(element){
    console.log(element)
}
coding.forEach(printMe)

coding.forEach((element,index,arr)=>{
    console.log(element,index,arr)
})