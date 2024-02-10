import { BackButton } from 'components/BackButton'
import { Button } from 'components/Button'
import { payslipsArray } from 'payslips'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Payslip } from 'types/Payslip'

export const PayslipDetails = () => {
  const navigate = useNavigate()
  const { id: payslipId } = useParams()
  const [payslip, setPayslip] = useState<Payslip | undefined>(undefined)

  useEffect(() => {
    setPayslip(payslipsArray.find((payslip) => payslip.id === payslipId))
  }, [payslipId])

  if (!payslip) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold text-gray-700">Payslip Not Found</h1>
      </div>
    )
  }

  const { id, fromDate, toDate, fileUrl } = payslip
  return (
    <div className="p-2">
      <div className="flex items-center gap-4">
        <Link to="/">
          <BackButton />
        </Link>
        <h1 className="mb-2 mt-0 text-4xl font-medium leading-tight">
          Payslip details
        </h1>
      </div>
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">ID:</dt>
            <dd className="text-gray-700 sm:col-span-2">{id}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">From:</dt>
            <dd className="text-gray-700 sm:col-span-2">{fromDate}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">To:</dt>
            <dd className="text-gray-700 sm:col-span-2">{toDate}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <Button onClick={() => navigate('/')}>Download PDF</Button>
          </div>
        </dl>
      </div>
    </div>
  )
}
