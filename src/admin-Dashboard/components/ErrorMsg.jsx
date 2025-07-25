import { Package } from "lucide-react"

const ErrorMgs = () => {
return (
	<>		
	 <div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
				<div className="flex items-center space-x-3">
					<div className="bg-red-100 rounded-full p-2">
						<Package className="w-6 h-6 text-red-600" />
					</div>
					<div>
						<h3 className="font-semibold text-red-800">Error Occured!</h3>
						<p className="text-red-600">{error.message}</p>
					</div>
				</div>
			</div>
	 </div>
		
	</>
)
}
export default ErrorMgs