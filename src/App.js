import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {useEffect, useState} from"react"
import { Button } from "bootstrap";
import axios from "axios";
function App() {


    const apiKey = "16735fb0d73574baf640a56e09d37b3a"
    const [inputCity, setinputCity] = useState("")
  const[data,setData] = useState({ })

  const getWeatherDetails =(cityName) =>{
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
     axios.get(apiURL).then((res) =>{
      console.log("response", res.data)

      setData(res.data);
     }).catch((err =>{
      console.log("err",err)
     }))
  }

  const handleChangeInput = (e) => {
   //console.log("value", e.target.value)
      setinputCity(e.target.value)
  }
   const handleSearch =() =>{
    getWeatherDetails(inputCity)
   }
  // useEffect(() =>{
  //   getWeatherDetails("Delhi")
  // }, [])
  return (
   <div className = "col-md-12">
    <div className ="weatherBg">

      <h1 className="heading">weather app</h1>


        <div className= "d-grid gap-4 col-4 mt-4">
        <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput} />
        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
    </div>
 
    {Object.keys(data).length > 0 &&
    <div className="col-md-12 text-center mt-5">

    <div className= "shadow rounded weatherResultBox">


      <img className="Icon"
      src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0"></img>

     <h5 className="weatherCity">{data?.name}</h5>
     <h6 className="weatherTemperature">{((data.main?.temp)-273.15).toFixed(2)}°C</h6>
    </div>
    </div>
}
   </div>
  );
}

export default App;
