import { useForm } from "react-hook-form"
import useAxiosPrivate from "../../../hooks/useAxiosPrivate"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useEffect } from "react"

const addUserForm = ({ handleCloseForm, editUser = null, isEdit = false }) => {
	const axios = useAxiosPrivate()
	const queryClient = useQueryClient()
	
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm();

	// Populate form with existing user data when editing
	useEffect(() => {
		if (isEdit && editUser) {
			setValue("username", editUser.username || "");
			setValue("email", editUser.email || "");
			// Handle both array and string roles
			const userRole = Array.isArray(editUser.roles) 
				? editUser.roles[0] 
				: editUser.role || editUser.roles || "";
			setValue("role", userRole);
			// Don't pre-fill password for security reasons
		}
	}, [isEdit, editUser, setValue]);

	const addUser = (userData) => {
		return axios.post("/users", userData);
	};

	const updateUser = (userData) => {
		return axios.patch(`/users/${editUser.id || editUser._id}`, userData);
	};

	// Add user mutation
	const {
		mutate: addUserMutate,
		isLoading: addingUserLoading,
		error: addError,
	} = useMutation({
		mutationFn: addUser,
		onSuccess: () => {
			reset();
			queryClient.invalidateQueries(["users"]);
			toast.success("User added successfully");
			handleCloseForm();
		},
		onError: (err) => {
			const message = err?.response?.data?.message 
			toast.error(message);
		},
	});

	// Update user mutation
	const {
		mutate: updateUserMutate,
		isLoading: updatingUserLoading,
		error: updateError,
	} = useMutation({
		mutationFn: updateUser,
		onSuccess: () => {
			reset();
			queryClient.invalidateQueries(["users"]);
			toast.success("User updated successfully");
			handleCloseForm();
		},
		onError: (err) => {
			const message = err?.response?.data?.message 
			toast.error(message);
		},
	});

	const onSubmit = (data) => {
		// Convert single role to array
		data.roles = [data.role];
		
		// Remove password field if it's empty during edit
		if (isEdit && (!data.password || data.password.trim() === "")) {
			delete data.password;
		}
		
		if (isEdit) {
			updateUserMutate(data);
		} else {
			addUserMutate(data);
		}
	};

	const isLoading = addingUserLoading || updatingUserLoading;

	return (
		<main>
			<div>
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-xl font-bold text-gray-800">
						{isEdit ? "Edit User" : "Add  User"}
					</h1>
					{handleCloseForm && (
						<button
							onClick={handleCloseForm}
							className="text-primary hover:text-secondary text-xl font-bold rounded-lg"
						>
							×
						</button>
					)}
				</div>
				
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="grid md:grid-cols-2 gap-4">
						{/* Username Field */}
						<div className="flex flex-col">
							<label className="text-slate-700 font-medium mb-1 text-sm">
								Username*
							</label>
							<input 
								type="text" 
								{...register("username", { 
									required: "Username is required",
									minLength: { value: 2, message: "Username must be at least 2 characters" }
								})}
								className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
									errors.username 
										? 'border-red-400 bg-red-50 focus:border-red-500' 
										: 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
								}`}
								placeholder="Enter username"
							/>
							{errors.username && (
								<span className="text-red-500 text-xs mt-1">
									{errors.username.message}
								</span>
							)}
						</div>

						{/* Password Field */}
						<div className="flex flex-col">
							<label className="text-slate-700 font-medium mb-1 text-sm">
								Password{!isEdit && "*"}
								{isEdit && (
									<span className="text-gray-500 text-xs ml-1">
										(leave blank to keep current)
									</span>
								)}
							</label>
							<input 
								type="password" 
								{...register("password", { 
									required: isEdit ? false : "Password is required",
									minLength: isEdit ? undefined : { 
										value: 6, 
										message: "Password must be at least 6 characters" 
									}
								})}
								className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
									errors.password 
										? 'border-red-400 bg-red-50 focus:border-red-500' 
										: 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
								}`}
								placeholder={isEdit ? "Enter new password (optional)" : "Enter password"}
							/>
							{errors.password && (
								<span className="text-red-500 text-xs mt-1">
									{errors.password.message}
								</span>
							)}
						</div>
					</div>

					{/* Email Field */}
					<div className="flex flex-col">
						<label className="text-slate-700 font-medium mb-1 text-sm">
							Email Address*
						</label>
						<input 
							type="email" 
							{...register("email", { 
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address"
								}
							})}
							className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
								errors.email 
									? 'border-red-400 bg-red-50 focus:border-red-500' 
									: 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
							}`}
							placeholder="Enter email address"
						/>
						{errors.email && (
							<span className="text-red-500 text-xs mt-1">
								{errors.email.message}
							</span>
						)}
					</div>

					{/* Role Selection */}
					<div className="flex flex-col">
						<label className="text-slate-700 font-medium mb-1 text-sm">
							User Type / Role*
						</label>
						<select 
							{...register("role", {
								required: "User type is required",
							})}
							className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
								errors.role 
									? 'border-red-400 bg-red-50 focus:border-red-500' 
									: 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
							}`}
						>
							<option value="">Select role...</option>
							<option value="Admin">Admin</option>
							<option value="Developer">Developer</option>
							
						</select>
						{errors.role && (
							<span className="text-red-500 text-xs mt-1">
								{errors.role.message}
							</span>
						)}
					</div>

					{/* Submit Button */}
					<div className="flex justify-center items-center pt-4">
						<button
							disabled={isLoading}
							type="submit"
							className={`px-6 py-3 text-white font-medium rounded-lg transition-all duration-20 ${
								isLoading
									? 'bg-gray-400 cursor-not-allowed' 
									: 'bg-secondary hover:shadow-sm'
							}`}
						>
							{isLoading 
								? (isEdit ? "Updating..." : "Adding...") 
								: (isEdit ? "Update User" : "Add User")
							}
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}

export default addUserForm;