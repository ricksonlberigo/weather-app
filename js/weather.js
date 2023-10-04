const APIKey = 'lN9nVTkXrjdqYZVMVGm3Cc1wfsubTPP1'
const baseURL = 'https://dataservice.accuweather.com/'

const getCityURL = cityName =>
  `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL = cityKey =>
  `${baseURL}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchAPI = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok) throw new Error('Não foi possível obter os dados da API')

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchAPI(getCityURL(cityName))
const getCityWeather = cityKey => fetchAPI(getWeatherURL(cityKey))
