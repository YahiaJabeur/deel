import { Home } from 'screens/Home'
import { PayslipDetails } from 'screens/PayslipDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payslip/:id" element={<PayslipDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
