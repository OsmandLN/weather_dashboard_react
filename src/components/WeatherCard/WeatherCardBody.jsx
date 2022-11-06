const WeatherCardBody = (props) => {
  console.log(props)
  const { cityName, temperature, weatherStatus, humidity } = props

  //style
  const cardBodyStyle = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "lightblue dashed 3px",
    margin: "15px auto"
  }

  return (
    <>
      <div className="Weather-card-body" style={cardBodyStyle}>
        <span className="City-name">{props.CurrentWeather.cityName}</span>
        <span className="Temperature">
          現在氣溫: {props.CurrentWeather.temperature} &#8451;
        </span>
        <span className="Weather-status">
          天氣狀態: {props.CurrentWeather.weatherStatus}
        </span>
        <span className="Humidity">
          濕度: {props.CurrentWeather.humidity}&#37;
        </span>
      </div>
    </>
  )
}

export default WeatherCardBody
