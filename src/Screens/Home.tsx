import PayslipItem from 'components/PayslipItem'
import { payslipsArray } from 'payslips'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [payslips] = useState(payslipsArray)

  return (
    <div className="p-2">
      <h1 className="mb-2 mt-0 text-4xl font-medium leading-tight">Payslips</h1>

      <ul role="list">
        {payslips.map(({ id, fromDate, toDate }) => (
          <li className="my-2" key={id} role="listitem">
            <Link
              to={`/payslip/${id}`}
              aria-label={`View Payslip from ${fromDate} to ${toDate}`}
            >
              <PayslipItem fromDate={fromDate} toDate={toDate} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
