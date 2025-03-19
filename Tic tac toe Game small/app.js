let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelector("#newBtn");
let backbtn=document.querySelector("#backButton");
let msgContainer=document.querySelector(".msgContainer");
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

let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

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
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                disabledBoxes();
                showWinner(pos1Val);
                return;
            }
            }
    }
    if(count==9){
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

