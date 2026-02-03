let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}` ;
    msgcontainer.classList.remove("hide"); 
    disableBoxes();
}; 
const checkWinner=() => {
    for (let pattern of winpatterns){
        let pos0Val=boxes[pattern[0]].innerText;
        let pos1Val=boxes[pattern[1]].innerText;
        let pos2Val=boxes[pattern[2]].innerText;

        if (pos0Val !="" && pos1Val !="" && pos2Val != ""){
            if (pos0Val === pos1Val && pos1Val === pos2Val){
                console.log("winner",pos0Val);
                showWinner(pos0Val);
            }
        }
    }
};
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);