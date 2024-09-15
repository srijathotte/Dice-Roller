let dice = document.getElementById('dice');
let btn = document.getElementById('btn');
let num = document.getElementById('num');
let audio = document.getElementById('bgm');
let audio2 = document.getElementById('bgm_2');

let rotate = 0;
btn.addEventListener('click', () => {

       audio.play();

       rotate += 360;
       dice.style.transform = `rotate(${rotate}deg)`;

       num.innerHTML = ' ';

       let diceRoll = Math.floor(Math.random() * 6) + 1;

       dice.classList.add('shadow');

       btn.style.backgroundColor = 'white'
       btn.style.color = 'black'

       setTimeout(() => {
              dice.classList.remove('shadow');
              num.innerHTML = diceRoll;
               btn.style.backgroundColor = 'black'
              btn.style.color = 'white'
              audio2.play();
       }, 1000);
});