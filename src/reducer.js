const intialState = {
    weatherData:{}
}

const reducer = (state = intialState,action) => {
    switch(action.type) {
        case 'GET_WEATHER': {
					console.log("reached");
           return {
               ...state,
               weatherData:action.payload
           };
        }
		}
		return state;
}

export default reducer;