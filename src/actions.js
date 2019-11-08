import axios from 'axios'


const weather = (cityname) => {
    
    return dispatch => { 
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=f9c1de82af230a54f7dd17a15e29cf23`)
    .then(res => {	
      console.log(res.data);
			const  currentWeather = {
            max_temp:(res.data.list[0]['main']['temp_max']-32)*5/9,
						min_temp:(res.data.list[0]['main']['temp_min']-32)*5/9,
						description:res.data.list[0]['weather'][0]['description']
        }
      return  dispatch({type:'GET_WEATHER',payload:currentWeather})    
    }).catch(error => {
        console.log(error)
    });     
}

}

export default weather;