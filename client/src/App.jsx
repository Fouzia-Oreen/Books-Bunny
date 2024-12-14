import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return ( 
  <>
  <Navbar />
  <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 bg-color_1 text-color_4">
  <Outlet />
  </main>
  <Footer />
  </>
  )
}

export default App;