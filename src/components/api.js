
const apiUrl="https://dummyjson.com/products?limit=100";

async function id(){
  const response =await fetch(apiUrl);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";

  }else{
    var data =await response.json();
   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".climate").innerHTML = data.weather[0].main;

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

  }
  

}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})