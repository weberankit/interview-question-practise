 //playibreak and skip
 for(let i=0;i<5;i++){
    
    if(i==2){
        continue;
    }
    console.log("hi i am amnki",i)
 }
 
 //playing with switch case 
 /*
 console.log("ll")
let a=4
switch(a){
    case 0:console.log("hhh")
         break;
    case 2:console.log("kingh is ")
       break;  
     default:console.log("dded")
       break;     
}*/
let i=9
//do{console.log(i);i++}while(i>10)
/*
//let a="on"
    const obj={
        "on":"off",
        "on":"dd",
        a:2,
     
    }
    let b={
        a:9,
        b:2
    }
    
   // console.log(obj["on"],obj[a])
*/
/*
    let objt={...b,...obj}
    console.log(objt)
   let m={
    a:9,
    b:2

}*/
/*
let by=[1,2]
console.log({...m,...by})
//error
//object can't iterate inside array
console.log([...m])
//error
//array can't iterate inside object
console.log([...m])
*/
//playing with destructirin
/*
let ab=[1,34,5]
const [ac,bc] =ab
console.log(ac,bc)
let [{name}]=[{name:"ankit"},{name:"pankit"}]
console.log(name)

//hoc
function a(){
    return function b(){
        return "ankit"
    }
}

console.log(a()())


//function

function an(){
    console.log("ll")
}

an.name="lkinh"
console.log(an(),an.prototype,an.name)
let ama=new an()
console.log(ama,ama.prototype,ama.name)

///*/
const ob={arr:[1,2]}
const a={...ob}
console.log(a)
//sort best example
 const an=["Ab","b","C","B"]
 console.log(an.sort((a,b)=>{
    let nameA = a.toLowerCase();
  let nameB = b.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
 }))
console.log(Symbol ("jj"))
let x=0
let y=x++
//let y=x+1 thid is different thing
console.log(y)


