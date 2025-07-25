import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import  useAxiosPrivate  from '../../../hooks/useAxiosPrivate';
import  useAuth from '../../../hooks/useAuth';

 const useEstimatesQuery = () => {
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const axios = useAxiosPrivate();

  // Query for getting messages
  const estimatesQuery = useQuery({
	queryKey: ['estimates'],
	queryFn: async () => {
		const response = await axios.get("/estimates")
		return response.data
	}, 
	enabled: isAuthenticated,
	staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const deleteMutation = useMutation({
	mutationFn: async (estimateId) => {
				const response = await axios.delete(`/estimates/${estimateId}`)
				return response.data
			},
	onSuccess: () => {
	  queryClient.invalidateQueries({ queryKey: ['estimates'] });
	 toast.success("Estimate deleted succesfully");
	},
	 onError: (error) => {
	  console.error('Delete failed:', error);
	  toast.error("Delete Failed");
	},
  });

  const markAsReadMutation = useMutation({
	mutationFn: async (estimateId) => {
		const response = await axios.patch(`/estimates/${estimateId}/read`, {
	  seen: true
	})
		return response.data
	},
	onSuccess: () => {
	  queryClient.invalidateQueries(['estimates']);
	},
	onError: (error) => {
	  console.error('Mark as read failed:', error);
	},
  });

  // Refetch function
  const refetchEstimates = () => {
	return estimatesQuery.refetch();
  };


  return {
	estimatesQuery,refetchEstimates,
	deleteMutation,markAsReadMutation
  };
};

export default useEstimatesQuery