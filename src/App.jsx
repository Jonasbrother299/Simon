import { AnimatePresence } from "framer-motion"
import {Routes , Route, useLocation} from "react-router-dom"

import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import Navbar from "./components/Navbar"
import Preloader from "./preload/preloader"

export default function App() {

  const location = useLocation()

  return (
    <>
    {/* <Preloader/> */}
    <Navbar/>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={ 
              <Home/>
          }/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
    </>
  )
}


