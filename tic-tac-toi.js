let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.resetbtn');
let newgame = document.querySelector('.newgame')
let msg = document.querySelector('#msg');
let msgcontainer = document.querySelector('.msgcontainer');


let turno = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const reset = ()=>{
    turno=true;
    enablebox();
    msgcontainer.classList.add('hide')
}

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        
        if (turno){
            box.innerText='o';
            turno=false;
        }
        else{
            box.innerText='x'
            turno=true
        }
        box.disabled=true;
        
        checkwinner();
        
    })
    
});
const enablebox = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disablebox = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();

}
const draw=()=>{
    if (boxes!=="" && showwinner===none){
        msg.innerText=`match is  draw`;
        msgcontainer.classList.remove("hide");
        disablebox();
    }
}

let count=0;
const buttonclick=() => {
// function buttonclick(){
    console.log("inside count", count)
    count++;
}


const buttonClickCounts=()=>{
    var buttons=document.querySelectorAll('.box');
    buttons.forEach(function(button){
        console.log(count)
        console.log(button)
        button.addEventListener('click',buttonclick)
    })
}
/*let counts = 0;
for(let i=0 i>=)
        var btn = document.getElementsByClassName("btns");
        let disp = document.getElementsByClassName("msgs");
        // console.log(btn)
        //btn.onclick(function(){
        //    console.log("here")
        //})

        btn.addEventListener='click',()=> {
            counts++;
        }
        console.log(counts)
    
        box.addEventListener('click',()=>{
            counts++;
            console.log("counts",counts);
            console.log(winner);
            if (count>=9 && winner!='x' && winner != 'o'){
                msg.innerText=`match is  draw`;
                msgcontainer.classList.remove("hide");
                disablebox();
                
            }

        })
*/

const checkwinner = ()=>{  
    for (let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){

            if (pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        } 
        buttonClickCounts()
    }
}

newgame.addEventListener('click',reset);
resetbtn.addEventListener('click',reset);
