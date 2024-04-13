const hrs = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10)?"0"+currentTime.getHours:currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10)?"0"+currentTime.getMinutes():currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10)?"0"+currentTime.getSeconds():currentTime.getSeconds();
},1000)
