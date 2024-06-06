// console.log("hello")
let boxes=document.querySelectorAll(".box");
// const boxes=document.getElementsByClassName("box");
// let reset=document.querySelector("#reset");
const reset=document.getElementById("reset");

let turn0 = true;

const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// function boxclick(){
//     console.log("i was clicked");
//     // const check=document.getElementById("box1");
//     // check.innerHTML="x";

//     x=document.getElementsByClassName("box");
//     x.innerHTML='g';
//     // x.innerTEXT='x';
//     console.log(x.innerHTML);
// }

let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click" ,() =>{
        // console.log("i was clicked");
        if(turn0==true){
            box.innerText="x";
            turn0=false;
        }
        else{
            box.innerText="0";
            turn0=true;            
        }
        box.disabled=true;
        count++;
        if(count==9){ document.getElementById("winner").innerHTML="❌ It's a Draw ⭕️";}
        checkWinner();
        
       
    });
});

function disableBoxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}

function checkWinner(){
    for(i of arr){
        // console.log(i[0]);
        // console.log(boxes[i[0]].innerHTML);
        // console.log(boxes[i[0]].innerText, boxes[i[1]].innerText, boxes[i[2]].innerText);
        // if(boxes[i[0][0]].innerText)
        // console.log(boxes[i[[0][0]]].innerText);
        // for(let j=0;i<3;j++){
        //     if(boxes[i[0][j]].innerText===boxes[i[1][j]] && boxes[i[1][j]].innerText===boxes[i[2][j]])
        // }
        if(boxes[i[0]].innerText===boxes[i[1]].innerText && boxes[i[1]].innerText===boxes[i[2]].innerText && boxes[i[0]].innerText==='x'){
            // console.log("Player one is winner");
            document.getElementById("winner").innerHTML="Congratulation, Winner is ❌";
            disableBoxes();
            reset.innerHTML="New Game";

        }
        if(boxes[i[0]].innerText===boxes[i[1]].innerText && boxes[i[1]].innerText===boxes[i[2]].innerText && boxes[i[0]].innerText==='0'){
            // console.log("Player two is winner");
            document.getElementById("winner").innerHTML="Congratulation, Winner is ⭕️";
            disableBoxes();
            reset.innerHTML="New Game";
        }
    } 
}
function resetBtn(){
    console.log("reset was clicked");
    location.reload();
}
