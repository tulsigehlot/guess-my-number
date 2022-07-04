

let secret = Math.trunc(Math.random() * 20 )+ 1;
let guessing = document.querySelector('.guessmeter');

let btnguess = document.querySelector('.guess');
let btnreset = document.querySelector('.reset');
let scorenumber = 20;


//=======Guess Button Functionality===============
btnguess.addEventListener('click',function(){
    let inputarea = Number(document.querySelector('.input').value);
    
    if(secret === inputarea){
        //let secret = Math.trunc(Math.random() * 20 + 1);
        
        document.querySelector('.number').innerText = secret;
       // document.querySelector('.number').innerText = secret;
        document.querySelector('.guessmeter').innerText = 'CORRECT GUESS🥇';
        document.querySelector('.container').style.backgroundColor = 'green';
        document.querySelector('.secretnum').style.width = '250px';
        document.querySelector('.container').style.border = ' 8px white solid';
    }

    else if(secret < inputarea){
        
           if(scorenumber>0){
                document.querySelector('.guessmeter').innerText = 'TWO HIGH GUESS📈';
                scorenumber--;
            document.querySelector('.score').innerText = scorenumber;
            }
            else{
                document.querySelector('.guessmeter').innerText = 'OOPS!! YOU LOST😢';
                document.querySelector('.container').style.backgroundColor = 'red';
                document.querySelector('.container').style.border = ' 8px white dotted';
            }
     }

    else if(secret > inputarea){
        
        if(scorenumber>0){
            document.querySelector('.guessmeter').innerText = 'TWO LOW GUESS📉';
            scorenumber--;
        document.querySelector('.score').innerText = scorenumber;
        }
        else{
            document.querySelector('.guessmeter').innerText = 'OOPS!! YOU LOST😢';
            document.querySelector('.container').style.backgroundColor = 'red';
            document.querySelector('.container').style.border = ' 8px white dotted';
        }

    }
}); 

btnreset.addEventListener('click' , function(){

    document.querySelector('.guessmeter').innerText = 'GUESSING METER';
    document.querySelector('.container').style.backgroundColor = 'black';
    secret = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('input').value = '';
    document.querySelector('.score').innerText = '20';
    document.querySelector('.number').innerText = '?';
});

    