console.log("jj")
//fetch the lsit of item
const list=document.querySelector(".list")
console.log(list)
const cart=document.querySelector(".cart")
let arr= JSON.parse(localStorage.getItem("h")) || []
let allCart 


if(arr.length>0){
    render()
}


async function fetchList(){
const data= await fetch("https://dummyjson.com/carts")
const json=await data.json()
console.log(json.carts[0])
allCart=json.carts
console.log(allCart)

allCart&& allCart.map((item)=>{
 //   console.log(item.id)
const div=document.createElement("div")

div.innerHTML = `
  
  
  ${item.products[0].title}${item.id} 
<button onClick={handleEl(${item.id})}>Add</button>
`;


list.append(div)
})
}
fetchList()

function handleEl(id){
    console.log(id)
let check=arr.find((item)=>{
    if(item.id == id){
        return item
    }
})

if(check){
  check.quat += 1
}else{
    arr.push({id:id,quat:1})
}
localStorage.setItem("h",JSON.stringify(arr))
render()
}


function render(){
    if(arr.length>0){
        cart.innerHTML=''
        arr.map((item)=>{
            const div=document.createElement("div")
            div.innerText=item.id
            cart.append(div)
        })
    }
}