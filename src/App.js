import About from "./components/About/About"
import Home from "./components/Home/Home"
import Navigation from "./components/Navigation/Navigation"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navigation/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
