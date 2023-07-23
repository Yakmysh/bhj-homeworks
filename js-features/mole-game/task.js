const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 10; i++){
    const kill = document.getElementById(`hole${i}`);
    kill.onclick = function() {
        if(kill.className === "hole hole_has-mole"){
            dead.textContent = +dead.textContent +1;
        }
        else{
            lost.textContent = +lost.textContent +1;
        }

        if(+lost.textContent === 5){
            alert('Game over');
            dead.textContent = 0;
            lost.textContent = 0;
        }
        else if(+dead.textContent === 10){
            alert('Victory');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}