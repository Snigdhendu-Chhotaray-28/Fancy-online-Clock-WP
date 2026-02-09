
let hour_hand = document.querySelector('.hour-hand');
let minute_hand = document.querySelector('.minute-hand');
let second_hand = document.querySelector('.second-hand');

function startTimer() {
    const intervalId = setInterval(() => {
        
        function grtTime(){
            const correntTime =  new Date();
            let hr = correntTime.getHours();
            let day_detect = 'AM';
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            let day = days[correntTime.getDay()];
            if(hr>12){
                hr = hr - 12;
                day_detect = 'PM';
            }
            let min = correntTime.getMinutes();
            let sec = correntTime.getSeconds();
            // console.log(`${hr}:${min}:${sec}`);

            hour_hand.style.transform = `rotate(${(hr*30)+(min*(1/2))+(sec*(1/120)+90)}deg)`;
            minute_hand.style.transform = `rotate(${(min*6)+(sec*(1/10)+90)}deg)`;
            second_hand.style.transform = `rotate(${sec*6+90}deg)`;

            document.querySelector('.display_time_date_day').innerHTML=`${hr} : ${min} : ${sec} ${day_detect}`;

            document.querySelector('.display_time_day').innerHTML=`${correntTime.getDate()}/${correntTime.getMonth()+1}/${correntTime.getFullYear()}   ${day}`;
        }

        grtTime();
    }, 1000);
}
startTimer();



window.addEventListener('load',()=>{

    // ================ Circular clock data assign ================ //

    const yearCercle = document.querySelector('.year');
    const secCercle = document.querySelector('.sec');
    const minCercle = document.querySelector('.min');
    const hourCercle = document.querySelector('.hour');
    const dateCercle = document.querySelector('.date');
    const monthCercle = document.querySelector('.month');
    const dayCercle = document.querySelector('.day');
    const countryCercle = document.querySelector('.country');

    const classes = [secCercle,minCercle,hourCercle,dateCercle,yearCercle,monthCercle,dayCercle];
    const divs = [60,60,24,31,20,12,7];

    const month_obj = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const weak = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    // console.log(divs[0]);

    for(let j = 0; j< 7; j++){
        let yearCercle_width = classes[j].offsetWidth;
        let yearCercle_height = classes[j].offsetHeight;
        // console.log(j);
        
    }




});