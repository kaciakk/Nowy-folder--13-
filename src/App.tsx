import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Navbar } from "./components/Navbar"
function App() {

  return (
    <>
  <Navbar />
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    </Container>'
    </>
  )
}

export default App
