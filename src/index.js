let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let m = document.getElementById("m");
let container = document.getElementById("myWatch");
let pname = document.getElementById("name");
 
function myTime(){
    let myDate = new Date;
    let hour = (myDate.getHours() < 10) ? "0" + myDate.getHours() : myDate.getHours();
    console.log(hour) 
    let Minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() :myDate.getMinutes();

    let seconde = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();
    let showAmPm = (myDate.getHours() >= 12) ? "PM" : "AM";
    if(myDate.getHours() === 0){
        hourMinute = 12;
    }else if(myDate.getHours() > 12){
        hourMinute = -12;
    }else{
        hourMinute = myDate.getHours();
    }

    let currentTime = hour + ":" + Minute + ":" + seconde + ":";
    let shoHour = hours.innerText = hour;

    let showMinute = minutes.innerText = Minute;

    let showSecond = seconds.innerText = seconde;

    let showM = m.innerText = showAmPm;
    let projectName = pname.innerText = "Digital Watch";
    // if(myDate < 10){
    //    "0" + myDate.getMinutes() ;
    // }else{
    //     myDate.getMinutes();
    // }


    let myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satarday"];
    let myMonth= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
        
        let day  = myDate.getDate();

        let currentDate = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()] + "," + " Date : " + day;
    

        let showOutput = document.getElementById("date");
        showOutput.innerText = currentDate;

        container.classList.add("card");
        hours.classList.add("hour");
        minutes.classList.add("minute");
        seconds.classList.add("second")
        pname.classList.add("name")
       

}
myTime()

setInterval(function(){
    myTime();
}, 1000);
 
