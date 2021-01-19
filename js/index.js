const upP1= "q";
const downP1 = "a";
const upP2= "o";
const downP2 = "l";

var game = function(){
    let time =30;
    let movementBar = 20;
    let movement = 20;
    let witdh = document.documentElement.clientWidth - movement;
    let height = document.documentElement.clientHeight - movement;
    let controlGame;
    let player1;
    let player2;
    
    function start(){
        init();
        controlGame = setInterval(play, time);
    }

    function init(){
        ball.style.left = 0;
        ball.state = 1;
        ball.direction = 1; // right 1, left 2
        player1 = new Object();
        player2 = new Object();
        player1.keyPress = false;
        player1.keyCode = null;
        player2.keyPress = false;
        player2.keyCode = null;
    }

    function stop(){
        clearInterval(controlGame);
        document.body.style.background = "#f00";
    }

    function play(){
        moveBar();
    }

    function moveBar(){
        if(player1.keyPress){
            if(player1.keyCode == upP1 && bar1.offsetTop >=0)
                bar1.style.top = (bar1.offsetTop - movementBar) + "px";
            if(player1.keyCode == downP1 && (bar1.offsetTop + bar1.clientHeight)<=height)
                bar1.style.top = (bar1.offsetTop + movementBar) + "px";
        }
        if(player2.keyPress){
            if(player2.keyCode == upP2 && bar2.offsetTop>=0)
                bar2.style.top = (bar2.offsetTop - movementBar) +"px";
            if(player2.keyCode == downP2 && (bar2.offsetTop + bar2.clientHeight)<=height)
                bar2.style.top = (bar2.offsetTop + movementBar) +"px";
        }
    }

    document.onkeydown = function(e){
        e = e || window.event;
        console.log(e.key);
        switch(e.key){
            case upP1: // Q
            case downP1: // A
                player1.keyCode = e.key;
                player1.keyPress = true;
            break;
            case upP2: // O
            case downP2: // L
                player2.keyCode = e.key;
                player2.keyPress = true;
            break;
        }
    }

    document.onkeyup = function(e){
        if(e.key == upP1 || e.key == downP1)
            player1.keyPress = false;
        if(e.key == upP2 || e.key == downP2)
            player2.keyPress = false;
    }

    start();
}();