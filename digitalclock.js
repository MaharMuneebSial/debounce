
function showTime(){
    let now = new Date();
    let hours=now.getHours();
    let minutes=now.minutes();
    let second= now.seconds();



    hours= hours < 10 ? "0" + hours : hours;
    minutes= minutes < 10 ? "0" + minutes : minutes;
    second= second < 10 ?  "0"  + second  : second;
    document.getElementById(`digital`).textContent= hours + ":" +minutes + ":" + second
}

showTime();
setInterval( showTime ,1000);