var winner = winner;
var turn = turn;

function onLoad(){
    document.querySelector('#clickme').addEventListener('click',pickTurn);
    //document.querySelector('#aDiv').addEventListener('click',pickTurn);
}

function pickTurn(event){
    if(event.target.id=='Xbutton'){
        
        //var squares = document.getElementsByClassName('square');
    	//for(var i = 0; i <squares.length; i++){
    		squares[i].innerHTML = "X";
            
        }
        
        event.target.innerHTML = "X";
    }
}
