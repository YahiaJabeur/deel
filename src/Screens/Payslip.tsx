import { useParams } from 'react-router-dom'

const PayslipDetails = () => {
  const { id } = useParams()

  return (
    <div>
      <p>Period: {id}</p>
    </div>
  )
}

export default PayslipDetails
