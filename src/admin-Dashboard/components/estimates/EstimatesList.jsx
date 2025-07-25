import ErrorMgs from '../ErrorMsg';
import Loading from '../Loading';
import EstimateCard from './EstimateCard'
import  useEstimatesQuery  from './useEstimatesQuery'

function EstimatesList() {
  const {
	estimatesQuery: { data: estimates, isLoading, error },
  } = useEstimatesQuery();

  if (isLoading) {
	return (
		<Loading/>
	)
  }

  if (error) {
	return (
	  <ErrorMgs/>
	)
  }

  if (!estimates || estimates.length === 0) {
	return (
	  <div className="text-center py-8">
		<div className="text-gray-400 text-6xl mb-4">📭</div>
		<p className="text-gray-500 text-lg">No estimates found.</p>
		<p className="text-gray-400 text-sm mt-2">estimates from your website will appear here.</p>
	  </div>
	)
  }

  const unreadCount = estimates.filter(estimates => !estimates.seen).length;

  return (
	<div>
	  <div className="flex justify-between items-center mb-6">
		<h2 className="text-lg font-bold text-gray-800">Estimates</h2>
		<div className="flex items-center space-x-4">
		  <span className="text-sm text-gray-600">
			Total: {estimates.length}
		  </span>
		  {unreadCount > 0 && (
			<span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full">
			  {unreadCount} unread
			</span>
		  )}
		</div>
	  </div>
	  
	  <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
		{estimates.map((estimate) => (
		  <EstimateCard 
			key={estimate._id || estimate.id} 
			estimate={estimate}
		  />
		))}
	  </div>
	</div>
  )
}

export default EstimatesList