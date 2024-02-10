import { Home } from 'Screens/Home'
import { PayslipDetails } from 'Screens/PayslipDetails'
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
