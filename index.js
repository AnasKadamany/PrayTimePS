
 
  function GetCityByClicking(currentCity){
    let params = {
        country: "PS",
        city: currentCity
      };
      axios.get('https://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
    .then(function (response) {
      let salahTime = response.data;
      let date=salahTime.data.date.gregorian.date;
      day=salahTime.data.date.hijri.weekday.ar;
      document.getElementById("date").innerHTML=date +" "+day;
      
      document.getElementById("Fajr").innerHTML = salahTime.data.timings.Fajr;
      document.getElementById("Dhuhr").innerHTML = salahTime.data.timings.Dhuhr;
      document.getElementById("Asr").innerHTML = salahTime.data.timings.Asr;
      document.getElementById("Maghrib").innerHTML = salahTime.data.timings.Maghrib;
      document.getElementById("Isha").innerHTML = salahTime.data.timings.Isha;
        
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
    let cities = ["القدس", "غزة", "بيت لحم","رام الله", "الخليل"]
    for(city of cities){
      let content = ` <option> ${city} </option>`
      document.getElementById("City").innerHTML+=content
    }
    document.getElementById("City").addEventListener("change",function(){
      let currentCity=this.value;
      document.getElementById("main-City").innerHTML=currentCity
      if(currentCity=="القدس"){
        
        GetCityByClicking("JEM")
      }
      if(currentCity=="رام الله"){
        GetCityByClicking("Rām Allāh wal Bīrah");
      }
      if(currentCity=="بيت لحم")
        GetCityByClicking("Bayt Laḩm")
      if(currentCity=="الخليل")
        GetCityByClicking("Al Khalīl")
      if(currentCity=="غزة")
        GetCityByClicking("Shamāl Ghazzah")
      
    })
  