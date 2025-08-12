import { NavLink } from "react-router-dom"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import useAxiosPrivate from "../../../hooks/useAxiosPrivate"
import { useState } from "react"
import { toast } from "react-toastify"
import UserForm from "./addUserForm" 
import Loading from "../Loading"
import { User2 } from "lucide-react"

const UserDash = () => {
	const axios = useAxiosPrivate()
	const queryClient = useQueryClient()
	const [showAddForm, setShowAddForm] = useState(false)
	const [editUser, setEditUser] = useState(null)
	const [showEditForm, setShowEditForm] = useState(false)
	const [userToDelete, setUserToDelete] = useState(null)
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

	// Fetch users query
	const {
		data: users = [],
		isLoading,
		error
	} = useQuery({
		queryKey: ["users"], 
		queryFn: async () => {
			const response = await axios.get("/users") 
			return response.data
		}
	})

	// Delete user mutation
	const {
		mutate: deleteUserMutate,
		isLoading: deletingUser
	} = useMutation({
		mutationFn: (userId) => axios.delete(`/users/${userId}`),
		onSuccess: (response) => {
			queryClient.invalidateQueries(["users"])
			const message = response?.data?.message || "User deleted successfully"
			toast.success(message)
			setShowDeleteConfirm(false)
			setUserToDelete(null)
		},
		onError: (err) => {
			const message = err?.response?.data?.message || "Failed to delete user"
			toast.error(message)
			setShowDeleteConfirm(false)
			setUserToDelete(null)
		}
	})

	const handleAddUserForm = () => {
		setShowAddForm(!showAddForm)
		// Close edit form if open
		if (showEditForm) {
			setShowEditForm(false)
			setEditUser(null)
		}
	}

	const handleEditUser = (user) => {
		setEditUser(user)
		setShowEditForm(true)
		// Close add form if open
		if (showAddForm) {
			setShowAddForm(false)
		}
	}

	const handleCloseEditForm = () => {
		setShowEditForm(false)
		setEditUser(null)
	}

	const handleDeleteClick = (user) => {
		setUserToDelete(user)
		setShowDeleteConfirm(true)
	}

	const handleConfirmDelete = () => {
		if (userToDelete) {
			deleteUserMutate(userToDelete._id || userToDelete.id)
		}
	}

	const handleCancelDelete = () => {
		setShowDeleteConfirm(false)
		setUserToDelete(null)
	}

	if (isLoading) {
		return (
			<div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
				<Loading/>
			</div>
		)
	}

	if (error) {
		return (
			<div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
				<div className="bg-white rounded-lg p-8 text-center border border-red-200">
					<div className="text-lg text-red-600">Error loading users: {error.message}</div>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen mt-20 p-2 bg-white">
			{/* Header Section */}
			<header className="bg-light text-primary rounded-lg  ">
				<div className="container mx-auto px-2 lg:px-4 py-3">
					<div className="flex flex-col md:flex-row md:items-center lg:justify-between gap-4">
						<div className="flex-1">
							<h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
								Users Inventory
							</h1>
							<p className="text-sm sm:text-base text-primary">
								Manage your users inventory, add new users, and update existing listings.
							</p>
						</div>
						
						<button
							onClick={handleAddUserForm}
							className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-yellow-400 text-slate-800 font-medium rounded-lg hover:bg-yellow-500 transition-colors w-full lg:w-auto whitespace-nowrap"  
						>
							Add New User
						</button>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-2 sm:px-3  py-6 space-y-6">
				
				{/* User Form - Show when adding */}
				{showAddForm && (
					<section className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6">
						<UserForm 
							handleCloseForm={handleAddUserForm}
							isEdit={false}
						/>
					</section>
				)}

				{/* Edit User Form - Show when editing */}
				{showEditForm && (
					<section className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6">
						<UserForm 
							handleCloseForm={handleCloseEditForm}
							editUser={editUser}
							isEdit={true}
						/>
					</section>
				)}
				
				{/* Users Grid */}
				<section className="bg-white rounded-lg border border-slate-100 p-4 sm:p-3">
					{users.length === 0 ? (
						<div className="flex flex-col items-center">
                <div className="border border-red-600 rounded-full p-3 text-red-500 text-6xl mb-4"><User2/>  </div>
                <p className="text-gray-500 text-lg">No users found.</p>
                <p className="text-gray-400 text-sm mt-2">Admin Users appear here.</p>
              </div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
							{users.map((user) => {
								const profile = user.username?.charAt(0)?.toUpperCase() || 'U'
								
								return (
									<article key={user._id || user.id || user.username} className="rounded-lg border border-slate-200  transition-all duration-300 overflow-hidden">
										
										{/* User Header */}
										<div className="bg-light text-dark border-b border-light/10 p-2">
											<div className="flex items-center gap-3 mb-3">
												<div className="w-10 h-10 bg-yellow-400 text-slate-800 rounded-full flex items-center justify-center font-bold">              
													{profile}
												</div>
												
												<div className="flex-1 min-w-0">
													<h3 className="text-lg font-semibold truncate">
														{user.username}
													</h3>
													<p className="text-dark text-sm truncate">
														{user.email}
													</p>
												</div>
											</div>
																						
										</div>

										{/* User Content */}
										<div className="p-2 space-y-5">
											{/* Roles Section */}
											<div>
												<div className="flex items-center gap-2 mb-3">
													<svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
													</svg>
													<h4 className="text-sm font-semibold text-slate-700">Roles</h4>
												</div>
												
												<div className="flex flex-wrap gap-2">
													{Array.isArray(user.roles) && user.roles.length > 0 ? (
														user.roles.map((role, index) => (
															<span
																key={index}
																className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-400 text-slate-800 border border-yellow-500"
															>
																{role}
															</span>
														))
													) : (
														<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-200 text-slate-600 border border-slate-300">
															No roles assigned
														</span>
													)}
												</div>
											</div>

											{/* Action Buttons */}
											<div className="flex  gap-2">
												<button 
													onClick={() => handleEditUser(user)}
													className="flex-1 px-3 py-2 bg-slate-700 text-white text-sm rounded hover:bg-slate-600 transition-colors"
												>
													<span className="flex items-center justify-center gap-2">
														<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
															<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
														</svg>
														Edit
													</span>
												</button>

												<button 
													onClick={() => handleDeleteClick(user)}
													className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
												>
													<span className="flex items-center justify-center gap-2">
														<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
														</svg>
														Delete
													</span>
												</button>
											</div>
										</div>
									</article>
								)
							})}
						</div>
					)}
				</section>
			</main>

			{/* Delete Confirmation Modal */}
			{showDeleteConfirm && userToDelete && (
				<div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-lg shadow-md max-w-md w-full border border-slate-200">
						<div className="p-6">
							<div className="flex items-start gap-4 mb-4">
								<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-semibold text-slate-900 mb-1">Confirm Delete</h3>
									<p className="text-slate-600 text-sm">This action cannot be undone</p>
								</div>
							</div>

							<div className="mb-6 pl-16">
								<p className="text-slate-700">
									Are you sure you want to delete user <span className="font-semibold text-slate-900">"{userToDelete.username}"</span>? 
									This will permanently remove their account and all associated data.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row justify-end gap-3">
								<button
									onClick={handleCancelDelete}
									disabled={deletingUser}
									className="px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors disabled:opacity-50 order-2 sm:order-1"
								>
									Cancel
								</button>
								<button
									onClick={handleConfirmDelete}
									disabled={deletingUser}
									className={`px-4 py-2 text-white rounded transition-colors order-1 sm:order-2 ${
										deletingUser
											? 'bg-slate-400 cursor-not-allowed'
											: 'bg-red-600 hover:bg-red-700'
									}`}
								>
									{deletingUser ? 'Deleting...' : 'Delete User'}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default UserDash