let upper=document.querySelector('#Upper');
let lower=document.querySelector('#Lower');
let number=document.querySelector('#numbers');
let symbol=document.querySelector('#symbol');
let generate=document.querySelector('.generate')
let password=document.querySelector(".password")
let keys=[];
function check_box(){
    if(upper.checked){
        keys.push("upper")
    }
    if(lower.checked){
        keys.push("lower")
    }
    if(number.checked){
        keys.push("number")
    }
    if(symbol.checked){
        keys.push("symbol")
    }
}
let letters={
    "upper":['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'W', 'X', 'Y', 'Z'],
    "lower":['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
  'u', 'v', 'w', 'x', 'y', 'z'],
    "number":['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    "symbol":['!', '"', '#', '$', '%', '&','*', '+','-', '/', '~','_','?', '@']
}
generate.addEventListener("click",()=>{
    let length=document.querySelector("#length").value 
    console.log(length)
    keys=[];
    password.innerText="";
    check_box()
    if(keys.length==0){
        password.innerText="You have to select at least one of the checkboxes"
    }
    if(length==""){
        length=1
    }
    for(let i=0;i<length;i++){
        let random_key=Math.floor(Math.random()*(keys.length))
        let random_value=Math.floor(Math.random()*(letters[keys[random_key]].length))
        password.innerText+=letters[keys[random_key]][random_value];
    }
})