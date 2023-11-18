import './App.css'
import { Form } from './Components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route path='/success' element={<h1 style={{ color: "white" }}>Success</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
