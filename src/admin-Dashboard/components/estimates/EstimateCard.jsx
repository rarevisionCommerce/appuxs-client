import { Calculator, Clock, DollarSign, Download, Mail, Pen, Phone, Eye } from "lucide-react";
import useEstimatesQuery from "./useEstimatesQuery"

function EstimateCard({ estimate, onEdit, onDelete, isDeleting }) {
  const {
    estimatesQuery: { data: estimates, isLoading, error },
    deleteMutation,
    markAsReadMutation
  } = useEstimatesQuery();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this estimate?')) {
      deleteMutation.mutate(estimate._id || estimate.id, {
        onSuccess: () => {
          if (onDelete) {
            onDelete(estimate._id || estimate.id);
          }
        },
        onError: (error) => {
          console.error('Error deleting Estimate:', error);
          alert('Failed to delete estimate. Please try again.');
        }
      });
    }
  }

  const handleMarkAsRead = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      markAsReadMutation.mutate(estimate._id || estimate.id, {
        onError: (error) => {
          console.error('Error marking estimate as read:', error);
          alert('Failed to mark estimate as read. Please try again.');
        }
      });
    }
  }

  const handleDownloadDocument = () => {
    if (estimate.documentPath) {
      // Assuming documentPath is a URL or you have an endpoint to download
      const link = document.createElement('a');
      link.href = estimate.documentPath;
      link.download = estimate.originalFileName || 'document';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

/*  const handleOpenDocument = () => {
    if (estimate.documentPath) {
      const fileName = estimate.originalFileName || '';
      const fileExtension = fileName.split('.').pop()?.toLowerCase();
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = estimate.documentPath;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Set download attribute to empty to force browser to try opening instead of downloading
      if (['pdf', 'jpg', 'jpeg', 'png', 'gif', 'txt', 'html'].includes(fileExtension)) {
        // For files that browsers can display, open directly
        link.removeAttribute('download');
      } else if (['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(fileExtension)) {
        // For Office documents, try different approaches
        try {
          // Method 1: Try Office Online if it's a public URL
          if (estimate.documentPath.startsWith('http')) {
            const officeOnlineUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(estimate.documentPath)}`;
            window.open(officeOnlineUrl, '_blank', 'noopener,noreferrer');
            return;
          }
        } catch (error) {
          console.log('Office Online not available, trying direct open');
        }
        
        // Method 2: Direct open (will prompt user to choose app)
        link.removeAttribute('download');
      }
      
      // Add click event and trigger
      document.body.appendChild(link);
      
      try {
        link.click();
      } catch (error) {
        console.error('Error opening document:', error);
        // Fallback: try window.open
        window.open(estimate.documentPath, '_blank', 'noopener,noreferrer');
      } finally {
        document.body.removeChild(link);
      }
    }
  } */
 
  return (
    <div className="group bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300
      transform overflow-hidden border border-gray-100 relative">
      
      {/* Status Indicator Bar */}
            
      {/* Header Section */}
      <div className="bg-gradient-to-r px-3 py-4 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">
              {estimate.name}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4"/>
                {estimate.email}
              </span>
              <span className="flex  items-center">
                <Phone className="h-4 w-4"/>
                {estimate.phoneNumber}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            {estimate.seen ? (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                ✓ Seen
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full border border-red-200 animate-pulse">
                ● Unread
              </span>
            )}
            {estimate.createdAt && (
              <div className="text-xs text-gray-500">
                {new Date(estimate.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:p-6 p-2 space-y-6">
        
        {/* Project Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" p-4 rounded-lg border border-primary/20">
            <h4 className="text-sm font-semibold text-primary mb-2 gap-1 flex items-center">
               <Calculator className="h-4 w-4"/>
              Project Type
            </h4>
            <p className="text-primary font-medium capitalize">{estimate.projectType}</p>
          </div>

          <div className={`p-4 rounded-lg border `}>
            <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
              <DollarSign className="h-4 w-4"/>
              Budget Range
            </h4>
            <p className="font-medium capitalize">{estimate.budget}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`p-4 rounded-lg border `}>
          <h4 className="text-sm font-semibold mb-2 gap-1 flex items-center">
               <Clock className="h-4 w-4"/>
            Project Timeline
          </h4>
          <p className="font-medium capitalize">{estimate.projectTimeline}</p>
        </div>

        {/* Project Description */}
        <div className=" p-4 rounded-lg border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 gap-1 flex items-center">
            <Pen className="h-4 w-4"/>
            Project Description
          </h4>
          <div className="bg-white p-4 rounded border-l-4 border-secondary shadow-md">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {estimate.ideaDescription}
            </p>
          </div>
        </div>

        {/* Document Attachment */}
        {estimate.documentPath && (
          <div className=" p-4 rounded-lg border border-primary/20">
            <h4 className="text-sm font-semibold text-primary mb-2 gap-2 flex items-center">
              <Download className="h-4 w-4"/>
              Attached Document
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-primary font-medium">
                {estimate.originalFileName || 'Document.pdf'}
              </span>
              <div className="flex gap-2">
                {/**<button
                  onClick={handleOpenDocument}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
                >
                  <Eye className="h-3 w-3"/>
                  Open
                </button> */}
                
                <button
                  onClick={handleDownloadDocument}
                  className="px-3 py-1 bg-secondary  text-sm rounded hover:bg-yellow-300 transition-colors"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={estimate.seen || false}
              onChange={handleMarkAsRead}
              disabled={markAsReadMutation.isLoading}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm font-medium text-gray-700">
              {markAsReadMutation.isLoading ? 'Updating...' : 'Mark as Read'}
            </span>
          </label>

          <div className="flex space-x-3">
            {onEdit && (
              <button
                onClick={() => onEdit(estimate)}
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg
                  hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
                  flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                <span>Edit</span>
              </button>
            )}
            
            <button
              onClick={handleDelete}
              disabled={deleteMutation.isLoading}
              className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg
                hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors focus:outline-none focus:ring-2 focus:ring-red-500
                flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              <span>{deleteMutation.isLoading ? 'Deleting...' : 'Delete'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstimateCard