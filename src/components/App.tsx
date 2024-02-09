import Home from 'Screens/Home'
import PayslipDetails from 'Screens/Payslip'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payslip/:id" element={<PayslipDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
