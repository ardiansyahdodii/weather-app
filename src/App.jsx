import Card from "./components/Card"
import DetailContent from "./components/DetailContent"
import MainContent from "./components/MainContent"

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
      {/* Kiri */}
        <Card className="w-[350px] h-[400px]">
          <MainContent />
        </Card>
      {/* Kanan */}
      <Card className="w-[350px] h-[400px]">
        <DetailContent />
      </Card>
    </div>
  )
}

export default App