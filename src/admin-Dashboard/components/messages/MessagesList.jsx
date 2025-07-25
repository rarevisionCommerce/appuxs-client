import ErrorMgs from '../ErrorMsg';
import Loading from '../Loading';
import MessageCard from './MessageCard'
import  useMessagesQuery  from './useMessagesQuery'

function MessagesList() {
  const {
    messagesQuery: { data: messages, isLoading, error },
  } = useMessagesQuery();

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

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-400 text-6xl mb-4">📭</div>
        <p className="text-gray-500 text-lg">No messages found.</p>
        <p className="text-gray-400 text-sm mt-2">Messages from your website will appear here.</p>
      </div>
    )
  }

  const unreadCount = messages.filter(msg => !msg.seen).length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Messages</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Total: {messages.length}
          </span>
          {unreadCount > 0 && (
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
              {unreadCount} unread
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {messages.map((message) => (
          <MessageCard 
            key={message._id || message.id} 
            message={message}
          />
        ))}
      </div>
    </div>
  )
}

export default MessagesList