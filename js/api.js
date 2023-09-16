const API_KEY = `d7ba983363877b8887cddd4fcb647090`;

const searchTemparature = ()=>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayTempareture(data));
}

const displayTempareture = tempareture =>{
    console.log(tempareture);
}