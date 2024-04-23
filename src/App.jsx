import './App.css'
import Destinations from './components/Destinantions/Destinations'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Questions from './components/Questions/Questions'
import Revievs from './components/Revievs/Revievs'
import Subscribe from './components/Subscribe/Subscribe'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Revievs />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
