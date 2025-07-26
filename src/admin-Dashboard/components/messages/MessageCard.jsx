import { Mail, Phone, User } from "lucide-react";
import  useMessagesQuery  from "./useMessagesQuery"

function MessageCard({ message, onEdit, onDelete, isDeleting }) {
  const {
    messagesQuery: { data: messages, isLoading, error },
    deleteMutation,
    markAsReadMutation
  } = useMessagesQuery();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMutation.mutate(message._id || message.id, {
        onSuccess: () => {
          // Optional: Call parent onDelete callback if provided
          if (onDelete) {
            onDelete(message._id || message.id);
          }
        },
        onError: (error) => {
          console.error('Error deleting message:', error);
          alert('Failed to delete message. Please try again.');
        }
      });
    }
  }

  const handleMarkAsRead = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      markAsReadMutation.mutate(message._id || message.id, {
        onError: (error) => {
          console.error('Error marking message as read:', error);
          alert('Failed to mark message as read. Please try again.');
        }
      });
    }
  }

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
      transform  overflow-hidden border border-gray-200">		

      {/* Sender Section */}
      <div className="p-6">
        <div className="flex justify-between items-start ">
          <h3 className="text-slate-900 inline-flex items-center gap-2 font-semibold transition-colors duration-300">
            <User className="h-5 w-5" /> {message.name}
          </h3>
          {message.seen ? 
            <span className="px-2 py-1 bg-green-200 text-green-700 text-xs rounded-full">
                Seen  
            </span>  :  <span className="px-2 py-1 bg-red-400 text-white text-xs rounded-full">
                Unread  
            </span>
          }
        </div>
        <div className="flex lg:flex-row py-2 flex-col gap-2">
            <div className="inline-flex gap-2 bg-gray-100 rounded-md p-1 items-center">
          <Mail className="h-5 w-5"/> {message.email}
        </div>
        <div className=" inline-flex gap-2 bg-gray-100 rounded-md p-1 items-center">
          <Phone className="h-5 w-5"/> {message.phoneNumber}
        </div>
        </div>
        

        {/* Message Content Section */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Message Content:</h4>
          <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border-l-4 border-secondary">
            {message.messageText}
          </p>
        </div>

        {/* Timestamp */}
        {message.createdAt && (
          <div className="text-xs text-gray-500 mb-4">
            Received: {new Date(message.createdAt).toLocaleString()}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-4 border-t border-gray-200">
          <label className="flex items-center space-x-2 flex-1">
            <input 
              type="checkbox" 
              checked={message.seen || false}
              onChange={handleMarkAsRead}
              disabled={markAsReadMutation.isLoading}
              className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded "
            />
            <span className="text-sm text-gray-700">
              {markAsReadMutation.isLoading ? 'Updating...' : 'Mark as Read'}
            </span>
          </label>
          
          <button 
            onClick={handleDelete}
            disabled={deleteMutation.isLoading}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md
              hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed 
              transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageCard