const StatCard = ({name, icon: Icon, value, color}) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700">
      <div className="sm:p-6 px-4 py-5">
        <span className="flex items-center text-sm font-medium text-gray-400">
            <Icon size={22} className="mr-2" style={{ color }}/>
            {name}
        </span>
        {/* <p className="mt-1 text-3xl font-semibold text-gray-100"> */}
            <p>
            {value}
        </p>
      </div>
    </div>
  )
}

export default StatCard
