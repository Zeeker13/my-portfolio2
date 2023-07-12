import "./App.css"
import { Pages } from "./components/pages/Pages"
import { useEffect } from "react"

//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"
import { Mywork } from "./components/pages/Mywork"
import { Route } from "react-router-dom/cjs/react-router-dom.min"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
    <Route path="/test" element={Mywork}/>
      
      <Pages />
    </>
  )
}



export default App
