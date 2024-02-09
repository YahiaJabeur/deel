import { Link, useParams } from 'react-router-dom'

const PayslipDetails = () => {
  const { id } = useParams()

  return (
    <div>
      <p>Period: {id}</p>
      <p>Period: {id}</p>
      <p>Period: {id}</p>
      <p>Period: {id}</p>
      <p>Period: {id}</p>
      <p>Period: {id}</p>
      <Link to={`/`}>
        <p>Period: {id}</p>
      </Link>
    </div>
  )
}

export default PayslipDetails
