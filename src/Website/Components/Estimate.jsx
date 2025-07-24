import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {axiosPublic} from "../../api/axios"; // Update with your axios config path
import EstimatePortrait from "../../assets/EstP.jpg";

function Estimate() {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch
    } = useForm();

    // Create estimate mutation
    const createEstimateMutation = useMutation({
        mutationFn: async (formData) => {
            const response = await axiosPublic.post('/estimates', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(`Estimate for ${data.newEstimate.name} submitted successfully!`);
            reset();
            setSelectedFile(null);
        },
        onError: (error) => {
            const errorMessage = error.response?.data?.message || 'Something went wrong!';
            toast.error(errorMessage);
        },
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            
            // Append all form fields
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phoneNumber', data.phoneNumber);
            formData.append('ideaDescription', data.ideaDescription);
            formData.append('projectType', data.projectType);
            formData.append('budget', data.budget);
            formData.append('projectTimeline', data.projectTimeline);
            
            // Append file if selected
            if (selectedFile) {
                formData.append('document', selectedFile);
            }
            
            await createEstimateMutation.mutateAsync(formData);
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                toast.error('Only PDF and Word documents are allowed!');
                event.target.value = '';
                return;
            }
            
            // Validate file size (10MB)
            if (file.size > 20 * 1024 * 1024) {
                toast.error('File size must be less than 20MB!');
                event.target.value = '';
                return;
            }
            
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    return (
        <div id="Estimate" className="flex pt-[100px]  min-h-screen">
            <div className="hidden w-1/3 bg-gradient-to-b from-blue-200 via-blue-200 to-gray-300 lg:flex flex-col gap-y-5 py-16 px-2">
                <h1 className="text-2xl font-semibold text-primary">Estimate Your Project!</h1>
                <p className="text-primary">Got an Idea? We can help you realize it.</p>
                <img src={EstimatePortrait} className="h-72 object-cover rounded-lg" alt="Estimate" />
            </div>
            
            <div className="h-full lg:w-2/3 w-full flex flex-col justify-center items-center px-4">
                <h1 className="text-primary text-2xl font-semibold mb-6">Estimate Your Project</h1>

                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="bg-light border border-gray-300 rounded-lg flex flex-col md:px-6 px-4 py-6 w-full max-w-4xl"
                >
                    {/* Name Field */}
                    <div className="flex flex-col mt-5 gap-y-1">
                        <label className="text-primary font-medium">Name*</label>
                        <input 
                            type="text" 
                            {...register("name", { 
                                required: "Name is required",
                                minLength: { value: 2, message: "Name must be at least 2 characters" }
                            })}
                            className={`p-3 border outline-none rounded-md transition-colors ${
                                errors.name ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
                            }`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col mt-5 gap-y-1">
                        <label className="text-primary font-medium">Email*</label>
                        <input 
                            type="email" 
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className={`p-3 border outline-none rounded-md transition-colors ${
                                errors.email ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
                            }`}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Phone Number Field */}
                    <div className="flex flex-col mt-5 gap-y-1">
                        <label className="text-primary font-medium">Phone Number*</label>
                        <input 
                            type="tel" 
                            {...register("phoneNumber", { 
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\+254[0-9]{9}$/,
                                    message: "Phone number must start with +254 followed by 9 digits"
                                }
                            })}
                            placeholder="e.g. +254712345678" 
                            className={`p-3 border outline-none rounded-md transition-colors ${
                                errors.phoneNumber ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
                            }`}
                        />
                        {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                    </div>

                    {/* Project Type Selection */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-primary mb-3">What type is your project?*</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {['Web Development', 'Mobile App', 'Business and E-commerce', 'Other'].map((type) => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                        type="radio" 
                                        value={type}
                                        {...register("projectType", { required: "Please select a project type" })}
                                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                                    />
                                    <span className="text-primary">{type}</span>
                                </label>
                            ))}
                        </div>
                        {errors.projectType && <span className="text-red-500 text-sm">{errors.projectType.message}</span>}
                    </div>

                    {/* Idea Description */}
                    <div className="flex flex-col mt-5 gap-y-1">
                        <label className="text-primary font-medium">Briefly Illustrate your Idea*</label>
                        <textarea 
                            {...register("ideaDescription", { 
                                required: "Project description is required",
                                minLength: { value: 20, message: "Description must be at least 20 characters" }
                            })}
                            className={`p-3 border outline-none rounded-md h-32 resize-vertical transition-colors ${
                                errors.ideaDescription ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
                            }`}
                            placeholder="Describe your project idea in detail..."
                        />
                        {errors.ideaDescription && <span className="text-red-500 text-sm">{errors.ideaDescription.message}</span>}
                    </div>

                    {/* Budget Selection */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-primary mb-3">Select amount in your budget*</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {['Less than Ksh 100k', 'Ksh 100k-Ksh 250k', 'Above Ksh 250k', 'Other price'].map((budget) => (
                                <label key={budget} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                        type="radio" 
                                        value={budget}
                                        {...register("budget", { required: "Please select a budget range" })}
                                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                                    />
                                    <span className="text-primary">{budget}</span>
                                </label>
                            ))}
                        </div>
                        {errors.budget && <span className="text-red-500 text-sm">{errors.budget.message}</span>}
                    </div>

                    {/* Project Timeline Selection */}
                    <div className="py-4">
                        <h2 className="text-lg font-semibold text-primary mb-3">What is your expected project timeline?*</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {['Less than 2 months', '2-4 months', '4-6 months', 'Over 6 months'].map((timeline) => (
                                <label key={timeline} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                        type="radio" 
                                        value={timeline}
                                        {...register("projectTimeline", { required: "Please select a timeline" })}
                                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                                    />
                                    <span className="text-primary">{timeline}</span>
                                </label>
                            ))}
                        </div>
                        {errors.projectTimeline && <span className="text-red-500 text-sm">{errors.projectTimeline.message}</span>}
                    </div>

                    {/* File Upload */}
                    <div className="flex flex-col mt-5 gap-y-1">
                        <label className="text-primary font-medium">Upload Document (Optional)</label>
                        <div className="relative">
                            <input 
                                type="file" 
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-primary hover:file:bg-tertiary transition-colors"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Supported formats: PDF, DOC, DOCX (Max: 10MB)
                            </p>
                        </div>
                        {selectedFile && (
                            <div className="mt-2 p-2 bg-gray-100 rounded-md">
                                <span className="text-sm text-primary">Selected: {selectedFile.name}</span>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center mt-8">
                        <button 
                            type="submit"
                            disabled={isSubmitting || createEstimateMutation.isPending}
                            className="bg-secondary text-primary px-8 py-3 rounded-md hover:bg-tertiary hover:text-light font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                        >
                            {isSubmitting || createEstimateMutation.isPending ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    Submitting...
                                </div>
                            ) : (
                                'Submit Estimate'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Estimate;