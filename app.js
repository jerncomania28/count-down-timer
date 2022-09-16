const dayElement = document.querySelectorAll('#day');
const hourElement = document.querySelectorAll('#hour');
const minuteElement = document.querySelectorAll('#minute');
const secondsElement = document.querySelectorAll('#seconds');
const box = document.querySelectorAll('.container_data--item_box');

const countDown = ()=>{

    const endDate = new Date("September 30 , 2022 00:00:00").getTime();

    const currentDate = new Date().getTime();

    const difference = endDate - currentDate;


    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let numberOfDays = Math.floor(difference/day);
    let numberOfHours = Math.floor((difference % day)/hour);
    let numberOfMinutes = Math.floor((difference % hour)/minute);
    let numberOfSeconds = Math.floor((difference % minute)/seconds);


    const displayFn = (element , text)=>{

        element.forEach((e)=>{  
            e.parentElement.dataset.currentNumber = text;
            e.innerHTML = text < 10 ? "0" + text : text;
            e.parentElement.classList.add('flip');
        })

    }


    displayFn(dayElement,numberOfDays);

    displayFn(hourElement ,numberOfHours);

    displayFn(minuteElement , numberOfMinutes);

    displayFn(secondsElement,numberOfSeconds);

}


setInterval(countDown , 1000);
