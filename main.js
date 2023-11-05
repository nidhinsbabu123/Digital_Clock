function clockTime(){
    // to get system time

    // There is a class which name is Date where the system store its time.

    // in below 'date' is an object and 'Date' is the class name

    let date = new Date()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let session = "AM"

    if(hours==0){

        
        hours = 12
        
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    // here 'clock' is the id name of the div that we have created in the html page. 
    clock.innerHTML = `${hours} : ${minute} : ${second}  ${session}`


    // here setTimeout is a predefined method 
    setTimeout(()=> {clockTime()}, 1000);
}


// function call
clockTime()