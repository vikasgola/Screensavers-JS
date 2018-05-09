function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
}


function draw(){

    if(mouseIsPressed){
        fill(0);
    }else{
        fill(Math.floor(255*Math.random()));
    }

    ellipse(mouseX,mouseY,80,80);
}