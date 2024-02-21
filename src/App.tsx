import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
function App() {

  return (
    <>
    <ShoppingCartProvider>
  <Navbar />
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    </Container>'
    </ShoppingCartProvider>
    </>
  )
}

export default App
