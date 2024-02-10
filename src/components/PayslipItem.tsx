interface PayslipItemProps {
  fromDate: string
  toDate: string
}

export default function PayslipItem({ fromDate, toDate }: PayslipItemProps) {
  return (
    <section
      role="article"
      className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
    >
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">From:</dt>
            <dd
              className="text-gray-700 sm:col-span-2"
              aria-label={`From date: ${fromDate}`}
            >
              {fromDate}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">To:</dt>
            <dd
              className="text-gray-700 sm:col-span-2"
              aria-label={`To date: ${toDate}`}
            >
              {toDate}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
