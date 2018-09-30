export const getData = () => dispatch => {
  fetch(`https://api.openweathermap.org/data/2.5/box/city?bbox=15,50,120,100&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then(data => dispatch(loadData(data)) )
    .catch(error => dispatch(showError(error)));
}


function loadData(data) {
  return {
    type: 'LOAD_DATA',
    data: data.list
  }
}

function showError(error) {
  return {
    type: 'SHOW_ERROR',
    error: error
  }
}
