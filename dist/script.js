
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
        for(let i = 0; i< divs[j] ; i++){
            let angle = (i/divs[j]) * 2 * Math.PI;
            let x = yearCercle_width/2 + (yearCercle_width/2-40) * Math.sin(angle);
            let y = yearCercle_height/2 + (yearCercle_height/2-40) * Math.cos(angle);
            // console.log(x);
            let div = document.createElement('div');
            div.classList ='small_ele';
            if(divs[j]==20){
                div.textContent = `${i+2010}`;
                div.classList = 'year_item';
            }
            else if(divs[j]==12){
                div.textContent = `${month_obj[i]}`;
                div.classList = 'other_item';
                x = yearCercle_width/2 + (yearCercle_width/2-26) * Math.sin(angle);
                y = yearCercle_height/2 + (yearCercle_height/2-28) * Math.cos(angle);
            }
            else if(divs[j]==7){
                div.textContent = `${weak[i]}`;
                div.classList = 'other_item';
                x = yearCercle_width/2 + (yearCercle_width/2-26) * Math.sin(angle);
                y = yearCercle_height/2 + (yearCercle_height/2-28) * Math.cos(angle);
            }
            else if(divs[j]==60 || divs[j]==31){
                if(divs[j]==60){
                    div.textContent = `${i}`;
                }
                else{
                    div.textContent = `${i+1}`;
                }
                div.classList = 'small_item';
                x = yearCercle_width/2 + (yearCercle_width/2-26) * Math.sin(angle);
                y = yearCercle_height/2 + (yearCercle_height/2-28) * Math.cos(angle);
            }
            else{
                if(divs[j]==24){
                    div.textContent = `${i}`;
                }
                else{
                    div.textContent = `${i+1}`;
                }
                div.classList = 'other_item';
                x = yearCercle_width/2 + (yearCercle_width/2-26) * Math.sin(angle);
                y = yearCercle_height/2 + (yearCercle_height/2-28) * Math.cos(angle);
            }
            if(divs[j]==20){
                div.style.left = `${x-35}px`;
                div.style.top = `${y-25}px`;
            }
            else if(divs[j]==60 || divs[j]==31){
                div.style.left = `${x-19}px`;
                div.style.top = `${y-11}px`;
            }
            else{
                div.style.left = `${x-25}px`;
                div.style.top = `${y-18}px`;
            }
            
            classes[j].appendChild(div);
        }
    }


    // ================ Strip clock data assign ================ //

    let hr1 = document.querySelector('.hr1 .context');
    let hr2 = document.querySelector('.hr2 .context');
    let min1 = document.querySelector('.min1 .context');
    let min2 = document.querySelector('.min2 .context');
    let sec1 = document.querySelector('.sec1 .context');
    let sec2 = document.querySelector('.sec2 .context');

    const objects = [hr1,hr2,min1,min2,sec1,sec2];
    const values = [3,10,6,10,6,10]

    objects.forEach((object,idx) => {
        for(let i=0; i<values[idx]; i++){
            let newEl = document.createElement('div');
            newEl.innerText = i;
            object.appendChild(newEl);
        }
    });


    // ================== Clock functionality ================== //

    const intervalId = setInterval(() => {

        // =========== Circular clock data =========== //

        const correntTime =  new Date();
        let hour = correntTime.getHours()*15;
        let min = correntTime.getMinutes()*6;
        let sec = correntTime.getSeconds()*6;
        let day = correntTime.getDay()*(360/7);
        let date = correntTime.getDate()*(360/31) - (360/31);
        // console.log(date);
        let month = correntTime.getMonth()*30;
        let year = (correntTime.getFullYear() - 2010)*18;


        // =========== Strip clock functionality =========== //

        let hr1_val = Math.floor(correntTime.getHours()/10);
        let hr2_val = correntTime.getHours()%10;

        let min1_val = Math.floor(correntTime.getMinutes()/10);
        let min2_val = correntTime.getMinutes()%10;

        let sec1_val = Math.floor(correntTime.getSeconds()/10);
        let sec2_val = correntTime.getSeconds()%10;

        function startClock(){

            
            // =========== Circular clock functionality =========== //

             // =================== Sec section =================== //

            let sec_circle = document.querySelector('.sec');
            sec_circle.style.transform = `rotate(${sec-90}deg)`;
            let sec_children = sec_circle.children;

            //  The .children property returns an HTMLCollection, not a JavaScript Array. HTMLCollections do not have the .array property, nor do they directly support array methods like .forEach unless converted to an actual array.

            Array.from(sec_children).forEach(element => {
                element.style.transform = `rotate(${-sec+90}deg)`;
            });
            // sec++;


            // =================== Min section =================== //

            let min_circle = document.querySelector('.min');
            min_circle.style.transform = `rotate(${min-90}deg)`;
            let min_children = min_circle.children;

            Array.from(min_children).forEach(element => {
                element.style.transform = `rotate(${-min+90}deg)`;
            });
            // min++;


             // ================== Hour section ================== //

            let hour_circle = document.querySelector('.hour');
            hour_circle.style.transform = `rotate(${hour-90}deg)`;
            let hour_children = hour_circle.children;

            Array.from(hour_children).forEach(element => {
                element.style.transform = `rotate(${-hour+90}deg)`;
            });
            // hour++;


            // ================== Date section ================== //

            let date_circle = document.querySelector('.date');
            date_circle.style.transform = `rotate(${date-90}deg)`;
            let date_children = date_circle.children;

            Array.from(date_children).forEach(element => {
                element.style.transform = `rotate(${-date+90}deg)`;
            });
            // date++;


            // ================== Month section ================== //

            let month_circle = document.querySelector('.month');
            month_circle.style.transform = `rotate(${month-90}deg)`;
            let month_children = month_circle.children;

            Array.from(month_children).forEach(element => {
                element.style.transform = `rotate(${-month+90}deg)`;
            });
            // month++;


            // ================== Day section ================== //

            let day_circle = document.querySelector('.day');
            day_circle.style.transform = `rotate(${day-90}deg)`;
            let day_children = day_circle.children;

            Array.from(day_children).forEach(element => {
                element.style.transform = `rotate(${-day+90}deg)`;
            });
            // day++;


            // ================== Year section ================== //

            let year_circle = document.querySelector('.year');
            year_circle.style.transform = `rotate(${year-90}deg)`;
            // console.log(year);
            let year_children = year_circle.children;

            Array.from(year_children).forEach(element => {
                element.style.transform = `rotate(${-year+90}deg)`;
            });
            // day++;




            // ============ Strip clock functionality ============ //

            sec2.style.bottom = `${(sec2_val-2)*0.25*10}rem`;
            sec1.style.bottom = `${sec1_val*0.25*10}rem`;
            min1.style.bottom = `${min1_val*0.25*10}rem`;
            min2.style.bottom = `${(min2_val-1)*0.25*10}rem`;
            hr1.style.bottom = `${(hr1_val-1)*0.25*10}rem`;
            hr2.style.bottom = `${(hr2_val-2)*0.25*10}rem`;



            // ================= Highlight ================= //
            
            classes.forEach((element,idx) => {
                let els = element.children;
                Array.from(els).forEach(el => {
                    

                });

            });
        



        }
        startClock();
    }, 1000);

});