console.log("jj")
//fetch the lsit of item
const list=document.querySelector(".list")
console.log(list)
const cart=document.querySelector(".cart")

let allCart 
async function fetchList(){
const data= await fetch("https://dummyjson.com/carts")
const json=await data.json()
console.log(json.carts[0])
allCart=json.carts
console.log(allCart)

allCart&& allCart.map((item)=>{
 //   console.log(item.id)
const div=document.createElement("div")
const btn=document.createElement("button")
btn.textContent="add"
btn.addEventListener("click",()=>handleAdd(item.id,item.products[0].title))
div.innerHTML = `
  
  
  ${item.products[0].title}${item.id} 

`;


list.append(div,btn)
})



}

fetchList()
const obj={}

const handleAdd=(id,title)=>{
//console.log(id,title)


console.log(id)
if(obj[id]){
  obj[id].quat+=1
}else{
    obj[id]={quat:1}
}
console.log(obj)
 
render(title)


}
function render(title){
    cart.innerHTML=''
    for(let item in obj){
    console.log(obj[item],item)
    const btn=document.createElement("button")
    btn.textContent="del"
    btn.addEventListener("click",()=>del(item,title))
    
    
    cart.innerHTML+=`${title} ${item} + ${obj[item].quat}   `
    cart.append(btn)
}
}

function del(id,title){

    console.log(id)
    if(obj[id]){
        delete obj[id]
        console.log(obj)
        render(title)
    }
  
}
