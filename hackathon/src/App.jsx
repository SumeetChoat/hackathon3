import './App.css'
import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
       
          <Route index element={<Pages.HomePage />} /> 
          <Route path="/pokepage" element={<Pages.PokePage />} /> 
          <Route path="/pokepage/:id" element={<Pages.PokeInfoPage />} /> 
     
      </Routes>
    </>
  )
}

export default App
