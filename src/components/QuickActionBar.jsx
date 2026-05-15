export default function QuickActionBar({ nav }) {
  const actions = [
    {
      label: 'Book Appointment',
      icon: (
        <svg width="22" height="25" viewBox="0 0 24 24" fill="#36454f">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
      ),
      onClick: () => nav.form('appointment'),
    },
    {
      label: 'Order Medicines',
      icon: (
        <svg width="25" height="27" viewBox="0 0 24 24" fill="#36454f">
          <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.06 15.94 0 13.36 0c-1.26 0-2.43.5-3.3 1.39L9 2.5 7.94 1.39C7.07.5 5.9 0 4.64 0 2.06 0 0 2.06 0 4.64c0 .48.11.92.18 1.36H0v14a2 2 0 002 2h16a2 2 0 002-2V6zM9.77 4.64c0-1.71 1.16-2.64 2.59-2.64C13.81 2 15 3.19 15 4.64c0 .8-.45 1.52-.98 2h-4.32c-.53-.48-.93-1.2-.93-2zM18 20H2V8h16v12zm-8-7H8v2H6v-2H4v-2h2v-2h2v2h2v2z"/>
        </svg>
      ),
      onClick: () => nav.form('order-medicine'),
    },
    {
      label: 'Book Lab Test',
      icon: (
        <svg width="17" height="24" viewBox="0 0 24 24" fill="#36454f">
          <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V6.825Q3.425 6.6 3.062 6.1 2.7 5.6 2.7 5q0-.825.588-1.413Q3.875 3 4.7 3h14.6q.825 0 1.413.587Q21.3 4.175 21.3 5q0 .6-.363 1.1-.362.5-.937.725V20q0 .825-.588 1.413Q18.825 22 18 22zm0-2h12V7H6zm3-3h6v-2H9zm-1-4h8v-2H8z"/>
        </svg>
      ),
      onClick: () => nav.form('lab-test'),
    },
    {
      label: 'Get Directions',
      icon: (
        <svg width="25" height="25" viewBox="0 0 24 24" fill="#36454f">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      onClick: () => nav.location(),
    },
  ]

  return (
    <div className="bg-white py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="flex flex-col items-center gap-3 bg-white border border-[#f1f5f9] py-6 px-4 rounded-2xl cursor-pointer hover:shadow-lg hover:border-[#22d3ee] transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: '0 20px 25px -5px rgba(0,0,0,0.07), 0 8px 10px -6px rgba(0,0,0,0.07)' }}
            >
              <div>{action.icon}</div>
              <span className="text-sm font-medium text-[#36454f] text-center leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
