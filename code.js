
const clock = () => {
    let API = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
    fetch(API)
    .then(x => x.text())
    .then(y => myDisplay(y));
}








setInterval(()=>{
    
    let timeArr = document.getElementById("time");

    // Setting Time in AM/PM  FORMAT
    const getTheTime = (time) => {
        let hours = time.getHours();
        let minutes = time.getMinutes();    
        let seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        return strTime;
    };

    // Setting Date
    const getTheDate = (date) => {
        let options = { weekday:"long", year:"numeric", month:"long", day:"numeric"};
        let strDate = date.toLocaleDateString(undefined,options);
        return strDate;
    };
    
    time = getTheTime(new Date());
    date = getTheDate(new Date());
    timeArr.innerHTML = time +" on "+ date;



},1000);


