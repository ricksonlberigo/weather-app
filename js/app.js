const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')
const cardContainer = document.querySelector('[data-js="card"]')

const showCityCard = () => {
  const existsDNoneClassInCardContainer =
    cardContainer.classList.contains('d-none')

  if (existsDNoneClassInCardContainer) {
    cardContainer.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async inputValue => {
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  const timeIcon = `<img src="../src/icons/${WeatherIcon}.svg" />`

  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
  timeImg.src = IsDayTime ? '../src/day.svg' : '../src/night.svg'
  timeIconContainer.innerHTML = timeIcon

  showCityCard()
}

const getCityLocalStorage = () => {
  const city = localStorage.getItem('city')

  if (city) {
    showCityWeatherInfo(city)
  }
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  localStorage.setItem('city', inputValue)
  showCityWeatherInfo(inputValue)
})
getCityLocalStorage()
