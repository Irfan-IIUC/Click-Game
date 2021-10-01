// Write your code here

const display = document.querySelector('.stats');
const btn_start = document.querySelector('button[name=start]');
const btn_click = document.querySelector('button[name=click]');

const winScore = 10;
let cnt = 0;

btn_start.addEventListener('click', ()=>{
    start();
});

btn_click.addEventListener('click', ()=>{
    cnt++;
    display.textContent = cnt;
});

const start = ()=>{
    cnt=0;
    display.textContent = cnt;

    btn_click.removeAttribute('disabled');

    startCount();
}

const startCount = ()=>{

    setTimeout(()=>{

        if(isWin()){
            display.textContent = 'Congratulations! You Win';
        }else{
            display.textContent = 'Sorry! You Lost';
        }

        btn_click.setAttribute('disabled', true);

    }, 2000);
}

const isWin = () =>{

    if(cnt<winScore){
        return false;

    }else{
        return true;
    }
}