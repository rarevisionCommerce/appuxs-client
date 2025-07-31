import useTitle from '../../../Website/Components/useTitle';
import MessagesList from './MessagesList'; 
import  useMessagesQuery  from './useMessagesQuery'

const MessagesDash = () => {
  const {
    messagesQuery: { data: messages, isLoading: messagesLoading, error: messagesError },
    refetchMessages
  } = useMessagesQuery();
  useTitle("Messages Endpoint")
  return (
    <div className="mt-16 sm:mt-20 p-2 sm:p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-xl  md:text-xl font-bold text-primary mb-2">
                Messages endpoint
              </h1>
              
            </div>
            
            {/* Refresh Button */}
            <button
              onClick={() => refetchMessages()}
              disabled={messagesLoading}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary
                disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                focus:outline-none "
            >
              {messagesLoading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>
        
        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <MessagesList />
        </div>
      </div>
    </div>
  )
}

export default MessagesDash
