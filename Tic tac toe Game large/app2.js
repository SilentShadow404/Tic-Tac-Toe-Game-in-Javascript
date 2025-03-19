let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelector("#newBtn");
let backbtn=document.querySelector("#backButton");
let msgContainer=document.querySelector(".msgContainer")
let msg=document.querySelector("#msg");

backbtn.addEventListener("click",()=>{
    window.location.href="../mainIndex.html";
})


let resetGame=()=>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let patterns=[];
let excludedNUmbers1=[0,1,6,7,12,13,18,19,24,25,30,31];
let excludedNUmbers2=[0,1,2,3,4,5,6,7,8,9,10,11];
let excludedNUmbers3=[0,1,6,7];
let excludedNUmbers4=[4,5,10,11];
for(let i=0;i<=35;i++){
    if(excludedNUmbers1.includes(i)){
        patterns.push([i,i+1,i+2,i+3,i+4]);
    }
    if(excludedNUmbers2.includes(i)){
        patterns.push([i,i+6,i+12,i+18,i+24,i+30]);
    }
    if(excludedNUmbers3.includes(i)){
        patterns.push([i,i+7,i+14,i+21,i+28]);
    }
    if(excludedNUmbers4.includes(i)){
        patterns.push([i,i+5,i+10,i+15,i+20]);
    }
}

let turn=true; //for player X
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turn){
            box.innerText="X";
            box.style.color="Blue";
            turn=false;
        }
        else{
            box.innerText="O";
            box.style.color="Red";
            turn=true;
        }
        box.disabled=true;
        box.classList.add('disabled');
        winnerCheck();
    });
});

const winnerCheck=()=>{
    for(let pattern of patterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        let pos4Val=boxes[pattern[3]].innerText;
        let pos5Val=boxes[pattern[4]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""&&pos4Val!=""&&pos5Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val&&pos3Val==pos4Val&&pos4Val==pos5Val){
                disabledBoxes();
                showWinner(pos1Val);
                return;
            }
            }
    }
    if(count==36){
        disabledBoxes();
        showDraw();
    }
}
let showWinner=(winner)=>{
    msg.innerText=`Congratulations\nWinner is ${winner}`;
    msgContainer.classList.remove("hide");
}

let showDraw=()=>{
    msg.innerText="Draw\nPlay Again";
    msgContainer.classList.remove("hide");
}

let disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.classList.add('disabled');
    }
}
let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove('disabled');
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

