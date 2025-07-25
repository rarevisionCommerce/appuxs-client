import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import  useAxiosPrivate  from '../../../hooks/useAxiosPrivate';
import  useAuth from '../../../hooks/useAuth';

 const useMessagesQuery = () => {
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const axios = useAxiosPrivate();

  // Query for getting messages
  const messagesQuery = useQuery({
	queryKey: ['messages'],
	queryFn: async () => {
		const response = await axios.get("/messages")
		return response.data
	}, 
	enabled: isAuthenticated,
	staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const deleteMutation = useMutation({
	mutationFn: async (messageId) => {
				const response = await axios.delete(`/messages/${messageId}`)
				return response.data
			},
	onSuccess: () => {
	  queryClient.invalidateQueries({ queryKey: ['messages'] });
     toast.success("message deleted succesfully");
	},
	 onError: (error) => {
      console.error('Delete failed:', error);
      toast.error("Delete Failed");
    },
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (messageId) => {
		const response = await axios.patch(`/messages/${messageId}/read`, {
      seen: true
    })
		return response.data
	},
    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
    onError: (error) => {
      console.error('Mark as read failed:', error);
    },
  });

  // Refetch function
  const refetchMessages = () => {
    return messagesQuery.refetch();
  };


  return {
	messagesQuery,refetchMessages,
	deleteMutation,markAsReadMutation
  };
};

export default useMessagesQuery