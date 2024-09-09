console.log("working")

const hrs=document.querySelector(".hrs")

const min=document.querySelector(".min")

const sec=document.querySelector(".sec")
const btn=document.querySelector(".btn")
console.log(hrs,min,sec,btn)


btn.addEventListener("click",call)
function call(){
    let present=Date.now()
    console.log(present)
let hrsVal=Number(hrs.value)
let minVal=Number(min.value)
let secVal=Number(sec.value)

console.log(hrsVal)
let alarmtime= hrsVal * 3600000 + minVal * 60000 + secVal * 1000 + present


let timer = setInterval(()=>{

let timeLeft = alarmtime-Date.now()+2000
console.log(timeLeft)




if(timeLeft<=1){
clearInterval(timer)
return
}


let remianSec=Math.floor(timeLeft/1000)
let remainMin=Math.floor(remianSec/60)
let remainHrs=Math.floor(remainMin/60)
let secLeft=remianSec%60
let minLeft=remainMin%60
hrs.value=remainHrs
min.value=minLeft
sec.value=secLeft



},1000)
}
