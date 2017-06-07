var winner = winner;
var turn = turn;

function onLoad(){
    document.querySelector('#clickme').addEventListener('click',pickTurn);
    document.querySelector('#aDiv').addEventListener('click',pickTurn);
}

function pickTurn(event){
    if(event.target.id=='Xbutton'){
        alert ("X was chosen");
    }
}
