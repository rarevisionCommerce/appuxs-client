import useTitle from '../../../Website/Components/useTitle';
import EstimatesList from './EstimatesList'; 
import  useEstimatesQuery  from './useEstimatesQuery'

const EstimatesDashboard = () => {
  const {
	estimatesQuery: { data: estimates, isLoading: estimatesLoading, error: estimatesError },
	refetchEstimates
  } = useEstimatesQuery();
  useTitle("Estimates Endpoint")
  return (
	<div className="mt-16 sm:mt-20 py-3 sm:p-4 md:p-6 bg-gray-50 min-h-screen">
	  <div className="max-w-7xl mx-auto">
		{/* Page Header */}
		<div className="bg-white rounded-lg shadow-sm p-5 sm:p-6 mb-4 sm:mb-6">
		  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
			<div className="flex-1">
			  <h1 className="text-lg  md:text-xl font-bold text-gray-900 mb-2">
				Estimates endpoint
			  </h1>
			  
			</div>
			
			{/* Refresh Button */}
			<button
			  onClick={() => refetchEstimates()}
			  disabled={estimatesLoading}
			  className="px-4 py-2 hover:bg-secondary text-white rounded-lg bg-primary 
				disabled:opacity-50 disabled:cursor-not-allowed transition-colors
				focus:outline-none "
			>
			  {estimatesLoading ? 'Refreshing...' : 'Refresh'}
			</button>
		  </div>
		</div>
		
		{/* Messages List */}
		<div className="bg-white rounded-lg shadow-sm p-3 md:p-6">
		  <EstimatesList />
		</div>
	  </div>
	</div>
  )
}

export default EstimatesDashboard
