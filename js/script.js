const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sek = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');


// new Date()  Komputerdagi vaqtni olib beradi
// getHours() - soatni olib beradi
// getMinutes() - minutni olib beradi
// getSeconds() - secundni olib beradi

function clock() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    sek.style.transform = `rotate(${seconds * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    setTimeout(() => { clock() }, 1000);

    hourNum.innerHTML = hours < 10 ? "0" + hours : hours
    minNum.innerHTML = minutes < 10 ? "0" + minutes : minutes
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
      tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (event) => {
        event.preventDefault()
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')

    
    })
}

const button = document.querySelector('.stopwatch__btn'),
    secHour = document.querySelector('.stopwatch__hours'),
    secMin = document.querySelector('.stopwatch__minutes'),
    sekund = document.querySelector('.stopwatch__seconds');
    symbol = document.querySelector('.tabsLink__span')


button.addEventListener("click", () => {
    if (button.innerHTML === 'start') {
        button.innerHTML = 'stop';
        btnStart();
        symbol.classList.add('active')
    }else if (button.innerHTML === 'stop'){
        button.innerHTML = 'clear';
        clearInterval(time)
        symbol.classList.add('active_clear')
    }else if (button.innerHTML === 'clear' ){
        button.innerHTML = 'start';
        secHour.innerHTML = 0;
        secMin.innerHTML = 0;
        sekund.innerHTML = 0;
        symbol.classList.remove('active')
        symbol.classList.remove('active_clear')
    }
});

function btnStart() {
    time = setInterval(() => { 
        sekund.innerHTML++ 
        if (sekund.innerHTML == 60){
            sekund.innerHTML = 0;
            secMin.innerHTML++;
        }else if(secMin.innerHTML == 60){
            secMin.innerHTML = 0;
            secHour.innerHTML++;
        }
    }, 1000);
}