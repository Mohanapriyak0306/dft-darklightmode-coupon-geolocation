const darkmode = () => {
    const wasDarkmode = localStorage.getItem('my-dark') === 'true';
    localStorage.setItem('my-dark', !wasDarkmode); 
    let mybody = document.body;
    mybody.classList.toggle("my-dark", !wasDarkmode);
};
function darklightmode(){
    document.body.classList.toggle('my-dark', localStorage.getItem('my-dark') === 'true');
}

function onloadPage() {
    document.getElementById('coupon').style.visibility="visible";
    document.getElementById('content').style.opacity = "0.3";
}
function closeCoupon() {
    document.getElementById('coupon').style.visibility="hidden";
    document.getElementById('content').style.opacity = "1";

}    

let x = document.getElementById("out");
let y = document.getElementById("weather");

function geolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo not supported";
    }
}    
function showPosition(data){
    console.log(data);
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Your order will delivered at location of "Latitude: ${lat} and Longitude: ${lon}". `;
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
        // api calling
        fetch(url,{method : 'GET'})
        //return promise
        .then((res) => res.json())
        //resolve the promise
        .then((data) => {
            console.log(data);
            let cityName = data.city.name;
            let temp = data.list[0].temp.day+" °C"
            y.innerText=`Weather of ${cityName} is ${temp}`
        })
}