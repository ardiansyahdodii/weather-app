import { useEffect, useState } from "react";
import { currentWeather, forecastWeather } from "../services/api";

const MainContent = (props) => {
    const [weatherDatas, setWeatherDatas] = useState([])
    const [forecastData, setForcastData] = useState([])
    useEffect(() => {
        currentWeather(props.city)
            .then((res) => {
                // console.log(res)
                const formatData = [{
                    city: res.name,
                    country: res.sys.country,
                    temp: res.main.temp,
                    humidity: res.main.humidity,
                    wind: res.wind.speed,
                    date: new Date(res.dt * 1000).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                    description: res.weather[0].description,
                    icon: res.weather[0].icon,
                }]

                setWeatherDatas(formatData)
            })
            .catch((err) => {
                console.log(err)
            })

        forecastWeather(props.city)
            .then((res) => {
                // console.log(res)
                const formatData = res.list.map((item) => {
                    return {
                        tempMin: item.main.temp_min,
                        tempMax: item.main.temp_max,
                        hour: new Date(item.dt * 1000).toLocaleTimeString("id-ID", { hour: 'numeric' }),
                        minute: new Date(item.dt * 1000).toLocaleTimeString("id-ID", { minute: 'numeric' }),
                        // day: new Date(item.dt * 1000).toLocaleDateString("id-ID", { day: 'numeric' }),
                        // month: new Date(item.dt * 1000).toLocaleDateString("id-ID", { month: 'short' }),
                        // year: new Date(item.dt * 1000).toLocaleDateString("id-ID", { year: 'numeric' }),
                    }
                })
                setForcastData(formatData)
            })
    }, [props.city])

    console.log(weatherDatas)
    console.log(forecastData);
    return (
        <div className="bg-gray-500/40 w-full md:w-2/4 h-[400px] mt-5 p-5 rounded-lg">
            {/* atas */}
            {weatherDatas.map((weather, index) => (
                <div key={index}>
                    <div className="flex justify-between">
                        <div className="flex space-x-5">
                            <img src={`assets/${weather.icon}.svg`} alt="" className="w-20 h-20" />
                            <div className="flex items-center text-3xl font-semibold">{Math.floor(weather.temp - 273.15)} °C | {Math.floor((weather.temp - 273.15) * 9 / 5 + 32)} °F</div>
                        </div>
                        <div className="text-2xl font-semibold">{weather.city}, {weather.country}</div>
                    </div>
                    {/* tengah */}
                    <div div className="flex justify-between mt-5 text-xl" >
                        <div className="ps-24">
                            <div>Wind {weather.wind} mph</div>
                            <div>Humididty {weather.humidity} %</div>
                        </div>
                        <div>
                            <div>{weather.date}</div>
                            <div>{weather.description}</div>
                        </div>
                    </div>
                </div>
            ))}
            {/* bawah */}
            <div className="mt-20 text-xl">
                <table className="w-full ">
                    <thead>
                        <tr>
                            <td></td>
                            {forecastData.filter((item, index) => index < 5).map((item, index) => (
                                <td key={index} className="text-center font-bold">{item.hour}.{item.minute}0</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pt-3">Min</td>
                            {forecastData.filter((item, index) => index < 5).map((item, index) => (
                                <td key={index} className="text-center pt-3">{Math.floor(item.tempMin - 273.15)} °C</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="pt-3">Max</td>
                            {forecastData.filter((item, index) => index < 5).map((item, index) => (
                                <td key={index} className="text-center pt-3">{Math.floor(item.tempMax - 273.15)} °C</td>                             // <td>{Math.floor(item.tempMax - 273.15)} °C | {Math.floor((item.tempMax - 273.15) * 9 / 5 + 32)} °F</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MainContent