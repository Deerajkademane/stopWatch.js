const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnreset = document.getElementById('reset');
const clock = document.getElementById('clock');

let msec = 0;
let sec = 0;
let min = 0;

let timer = null;

btnStart.addEventListener('click',() => {
    console.log('clicked');
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(startTimer,10);
    });

btnStop.addEventListener('click',() => {
    clearInterval(timer);
});

btnreset.addEventListener('click',() => {
    clearInterval(timer);
    clock.innerHTML =`00:00:00`
    msec=sec=min=00;
});

const startTimer = ()=>{
    msec+=1;
    if (msec === 100){
        msec = 0;
        sec+=1;
        if (sec === 60){
            sec=0;
min+=1;
}
            
}
let msecString=msec<10?`0${msec}` : msec;
let secString=sec<10?`0${sec}` : sec;
let minString=min<10?`0${min}` : min;

clock.innerHTML=`${minString} : ${secString} : ${msecString}`;
}
