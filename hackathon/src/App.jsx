import './App.css'
import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import {Header} from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />} /> 
          <Route path="/pokepage" element={<Pages.PokePage />} /> 
          <Route path="/pokepage/:id" element={<Pages.ShowInfoPage />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
