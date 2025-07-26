const Loading = () => {
	return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="flex flex-col items-center space-y-4">
				<div className="animate-spin rounded-full h-6 w-6 border-4 border-secondary border-t-transparent"></div>
				<p className="text-gray-600 animate-bounce font-medium">Loading... </p>
			</div>
        </div>
    )
}
export default Loading