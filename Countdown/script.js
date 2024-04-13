const endDate = document.getElementById("end-date");
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


endDate.textContent = "15 April 2024 7:20 PM";
const clock = () => {
    const end = new Date(endDate.textContent);
    console.log(end);

    const now = new Date();
    console.log(now)

    //Difference is in ms so to convert it in s we will divide it by 1000
    const difference = (end - now)/1000;

    if(difference <= 0){
        return;
    }

    days.innerText = (Math.floor(difference / (24*60*60))<10)?"0"+ Math.floor(difference / (24*60*60)) : Math.floor(difference / (24*60*60));
    hours.innerText = (Math.floor((difference / (60*60))%24)<10)?"0"+ Math.floor((difference / (60*60))%24) : Math.floor((difference / (60*60))%24);
    minutes.innerText = (Math.floor((difference / (60)%60))<10)?"0"+ Math.floor((difference / (60)%60)) : Math.floor((difference / (60)%60));
    seconds.innerText = (Math.floor(difference%60)<10)?"0"+ Math.floor(difference%60) : Math.floor(difference%60);

    // hours.innerText = Math.floor((difference / (60*60))%24);
    // minutes.innerText = Math.floor((difference / (60)%60));
    // seconds.innerText = Math.floor(difference%60);

    // console.log("Days : " +days)
    // console.log("Hours : " +hours)
    // console.log("Minutes : " +minutes)
    // console.log("Seconds : " +seconds)
    // console.log("Difference : " + difference)  
    
    
}

setInterval(()=>{
    clock()
},1000);
// clock()