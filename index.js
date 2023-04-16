const mosquito=document.getElementById("mosquito");
const countSet=document.getElementById("count");
const start=document.getElementById("start");
const gameLevel=document.getElementById("gameLevel");
let level=3000;
let flag=false;
let count=0;
var mosquitoChange;

function call(){
    switch(gameLevel.value){
        case "easy":{
            level=3000;
            break;
        }
        case "medium":{
            level=2000;
            break;
        }
        case "hard":{
            level=1000;
            break;
        }
    }
    if(flag){
        mosquitoPositionChange();
        // console.log(mosquitoChange);
    }else{
        clearInterval(mosquitoChange);
    }
}

gameLevel.addEventListener("change",()=>{
    if(flag){
        clearInterval(mosquitoChange);
    }
    call();
})

start.addEventListener("click",()=>{
    flag=!flag;
    start.innerHTML=flag?"Stop":"Start";
    call();
})

function update(){
    countSet.innerHTML=count;
}

mosquito.addEventListener("click",()=>{
    if(flag){
        count++;
        update();
    }
})

update();
const mosquitoPositionChange=()=>{
    mosquitoChange=setInterval(()=>{
        let x,y;
        x=Math.floor(Math.random()*(490)+1);
        y=Math.floor(Math.random()*(490)+1);
        mosquito.style.left=x+"px";
        mosquito.style.top=y+"px";
        console.log(x,y)
    },level);
}

