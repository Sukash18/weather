function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='8552267ee193b9e1b24c87760b76254d';
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response. json())
    .then (data => {
      var t = data['main']['temp']
      document.getElementById("output").innerHTML=t;
})
}
