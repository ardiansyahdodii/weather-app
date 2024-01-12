import { useState } from "react"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

const App = () => {
  const [city, setCity] = useState('bandung')
  const [changeCity, setChangeCity] = useState('')

  const submitCity = (e) => {
    e.preventDefault()
    setCity(changeCity)
  }
  // console.log(city)
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700 p-5" style={{ backgroundImage: "url(/assets/bg-full.jpg)", backgroundSize: 'cover' }}>
      <h1 className="mt-5 text-4xl font-bold">Weather App</h1>
      <h3 className="mt-1 ">Find the weather in your city</h3>
      <div className="mt-5">
        <form onSubmit={submitCity} className="flex space-x-3">
          <input type="text" name="city" id="city" placeholder="Search City Name" value={changeCity} onChange={(e) => setChangeCity(e.target.value)} className="p-2 rounded font-semibold text-black" />
          <button type="submit" className="bg-zinc-300 hover:bg-zinc-100 font-bold py-2 px-4 rounded text-black">Search</button>
        </form>
      </div>

      <MainContent city={city} />
      <div className="bottom-0">
        <Footer />
      </div>
      
    </div>
  )
}

export default App