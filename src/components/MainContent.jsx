import { useEffect, useState } from "react";
import { currentWeather } from "../services/api";

const MainContent = (props) => {
    const [weatherDatas, setWeatherDatas] = useState([])
    useEffect(() => {
        currentWeather(props.city)
            .then((res) => {
                console.log(res)
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
    }, [props.city])

    console.log(weatherDatas)
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
            <div className="mt-10 text-xl">
                <table className="w-full ">
                    <thead>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Min</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Max</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div >
    )
}

export default MainContent