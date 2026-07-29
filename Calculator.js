let btns = document.getElementsByClassName("button");
let space = document.getElementsByClassName("space")[0]
let clear = document.getElementsByClassName("btns")[0]
let del = document.getElementsByClassName("btnss")[0]
let operators = document.getElementsByClassName("opr")
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click', ()=>{
         if(btns[index].innerHTML !== "=" & btns[index].innerHTML !=="x"){
            space.value += btns[index].innerHTML;
        }
         if(btns[index].innerHTML === "x"){
            space.value += "*";
        }
        if(btns[index].innerHTML === "="){
        space.value =  eval(space.value);
    }
   
    
},
clear.onclick = () => {
    space.value = ""
},
del.onclick = ()=>{
    space.value = space.value.slice(0,-1);
}
    )}