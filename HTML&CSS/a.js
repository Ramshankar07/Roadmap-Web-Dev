
document.querySelector("buton").addEventListener("click", play());

function play() {
    let p1 = Math.random();
    p1= Math.floor(p1*6) +1;
    let p2 = Math.random();
    p2= Math.floor(p2*6) +1;
    
    if(p1 > p2){
        alert("the winner is p1");
    }
    else if(p2 > p1){
        alert("the winner is p2");
    }
    else{
        alert("draw");
    }
    
}
