import { payslipsArray } from 'payslips'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [payslips] = useState(payslipsArray)

  return (
    <div>
      <h1>Payslips</h1>
      <ul>
        {payslips.map((payslip) => (
          <li key={payslip.id}>
            <Link to={`/payslip/${payslip.id}`}>
              <p>Period: {payslip.fileUrl}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
