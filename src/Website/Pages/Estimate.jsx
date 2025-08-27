import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import axiosPublic from "../../api/axios"; // Update with your axios config path
import EstimatePortrait from "../../assets/EstP.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
        },        onError: (error) => {
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
        <div id="Estimate" className="flex flex-col  min-h-screen bg-slate-50">
            <Header/>
            <Helmet>
                <title>Get Started With A Project Estimate | Isosoft Softwares</title>
                <meta name="description" content="Contact Isosoft for professional software development services. Reach out for web development, mobile app development, custom software solutions, and digital transformation projects in Kenya." />              
                <meta  name="keywords" content=" contact Isosoft, web development contact,contact freelance company, custom software solutions, digital transformation" />                        
            </Helmet>
            {/* Left Side Panel */}
            <header className=" pt-28 bg-slate-800 flex flex-col lg:flex-row gap-5 p-6">
                <header className="container mx-auto">
                    <h1 className="lg:text-2xl text-xl font-bold text-yellow-400 mb-4 leading-tight">
                        Transform Your Vision Into Reality
                    </h1>
                    <p className="text-slate-300 mb-6  leading-relaxed">
                        Get a comprehensive project estimate tailored to your unique requirements. Our expert team analyzes your vision and provides detailed insights into development scope, timeline, and investment needed.
                    </p>
                    <div className="mt-3 bg-secondary/20 backdrop-blur-sm border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 rounded-full px-6 py-3 text-center">                     
                           
                            <div className="text-secondary gap-2 inline-flex items-center"> <div className="bg-secondary font-semibold rounded-full p-1"></div>Weigh Your Vission </div>
                                             
                            
                        </div>
                </header>    
                    <div className="space-y-4 container mx-auto mb-8">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 text-sm">
                                <span className="font-semibold text-white">Detailed Analysis:</span> We examine every aspect of your project requirements
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 text-sm">
                                <span className="font-semibold text-white">Transparent Pricing:</span> Clear breakdown of costs with no hidden fees
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 text-sm">
                                <span className="font-semibold text-white">Professional Consultation:</span> Expert guidance throughout your project journey
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <img 
                        src={EstimatePortrait} 
                        className="w-full h-64 object-cover rounded-lg shadow-lg " 
                        alt="Professional project estimation consultation" 
                    />
                    </div>
                    
                </header>
            
            
            {/* Right Side Form */}
            <div className="h-full  w-full flex flex-col justify-start items-center px-3 py-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-slate-800 text-xl font-bold mb-3">Get Your Project Estimate</h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Share your project vision with us and receive a detailed estimate that covers scope, timeline, and investment. 
                            Filling this form is 100% free!
                        </p>
                    </div>

                   

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 w-full">
                        <div onSubmit={handleSubmit(onSubmit)}>
                        {/* Personal Information Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                                Personal/Organisation Information
                            </h3>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Name Field */}
                                <div className="flex flex-col">
                                    <label className="text-slate-700 font-medium mb-1 text-sm">Full Name*</label>
                                    <input 
                                        type="text" 
                                        {...register("name", { 
                                            required: "Name is required",
                                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                                        })}
                                        className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
                                            errors.name 
                                                ? 'border-red-400 bg-red-50 focus:border-red-500' 
                                                : 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                                </div>

                                {/* Phone Number Field */}
                                <div className="flex flex-col">
                                    <label className="text-slate-700 font-medium mb-1 text-sm">Phone Number*</label>
                                    <input 
                                        type="tel" 
                                        {...register("phoneNumber", { 
                                            required: "Phone number is required",
                                            pattern: {
                                                    value: /^[\+]?[0-9][\d]{0,15}$/,
                                                    message: "Please enter a valid phone number"
                                                }
                                        })}
                                        placeholder="e.g. (123) 456-7890" 
                                        className={`p-3 border outline-none rounded-lg transition-all duration-200 text-sm ${
                                            errors.phoneNumber 
                                                ? 'border-red-400 bg-red-50 focus:border-red-500' 
                                                : 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
                                        }`}
                                    />
                                    {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col mt-4">
                                <label className="text-slate-700 font-medium mb-1 text-sm">Email Address*</label>
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
                                    placeholder="Enter your email address"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>
                        </div>

                        {/* Project Details Section */}
                        <div className="mb-8 grid">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                                Project Details
                            </h3>
                            <div className="grid lg:grid-cols-2  lg:gap-10">
                                  {/* Project Type Selection */}
                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-slate-700 mb-3">What type is your project?*</h4>
                                <div className="grid grid-cols-1  gap-3">
                                    {['Web Development', 'Mobile App', 'Business and E-commerce', 'Other'].map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg border border-slate-200 transition-all duration-200">
                                            <input 
                                                type="radio" 
                                                value={type}
                                                {...register("projectType", { required: "Please select a project type" })}
                                                className="w-4 h-4 text-yellow-400 border-slate-300 focus:ring-yellow-400 focus:ring-2"
                                            />
                                            <span className="text-slate-700 font-medium text-sm">{type}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.projectType && <span className="text-red-500 text-xs mt-2">{errors.projectType.message}</span>}
                            </div>

                            {/* Idea Description */}
                            <div className="flex flex-col mb-6">
                                <label className="text-slate-700 font-medium mb-1 text-sm">Describe Your Project Vision*</label>
                                <p className="text-slate-500  mb-2">
                                    Provide detailed information about your project goals, target audience, key features, and any specific requirements.
                                </p>
                                <textarea 
                                    {...register("ideaDescription", { 
                                        required: "Project description is required",
                                        minLength: { value: 20, message: "Description must be at least 20 characters" }
                                    })}
                                    className={`p-3 border outline-none rounded-lg h-32 resize-vertical transition-all duration-200 text-sm ${
                                        errors.ideaDescription 
                                            ? 'border-red-400 bg-red-50 focus:border-red-500' 
                                            : 'border-slate-300 focus:border-yellow-400 focus:bg-slate-50'
                                    }`}
                                    placeholder="Describe your project idea, objectives, target users, core features, and any technical requirements you have in mind..."
                                />
                                {errors.ideaDescription && <span className="text-red-500 text-xs mt-1">{errors.ideaDescription.message}</span>}
                            </div>       
                            </div>

                           
                        </div>

                        {/* Budget and Timeline Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                                Budget & Timeline
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Budget Selection */}
                                <div>
                                    <h4 className="text-lg font-medium text-slate-700 mb-3">Select your budget range*</h4>
                                    <div className="space-y-3">
                                        {['Less than Ksh 100k', 'Ksh 100k-Ksh 250k', 'Above Ksh 250k', 'Other price'].map((budget) => (
                                            <label key={budget} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg border border-slate-200 transition-all duration-200">
                                                <input 
                                                    type="radio" 
                                                    value={budget}
                                                    {...register("budget", { required: "Please select a budget range" })}
                                                    className="w-4 h-4 text-yellow-400 border-slate-300 focus:ring-yellow-400 focus:ring-2"
                                                />
                                                <span className="text-slate-700 font-medium text-sm">{budget}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.budget && <span className="text-red-500 text-xs mt-2">{errors.budget.message}</span>}
                                </div>

                                {/* Project Timeline Selection */}
                                <div>
                                    <h4 className="text-lg font-medium text-slate-700 mb-3">Expected project timeline?*</h4>
                                    <div className="space-y-3">
                                        {['Less than 2 months', '2-4 months', '4-6 months', 'Over 6 months'].map((timeline) => (
                                            <label key={timeline} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg border border-slate-200 transition-all duration-200">
                                                <input 
                                                    type="radio" 
                                                    value={timeline}
                                                    {...register("projectTimeline", { required: "Please select a timeline" })}
                                                    className="w-4 h-4 text-yellow-400 border-slate-300 focus:ring-yellow-400 focus:ring-2"
                                                />
                                                <span className="text-slate-700 font-medium text-sm">{timeline}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.projectTimeline && <span className="text-red-500 text-xs mt-2">{errors.projectTimeline.message}</span>}
                                </div>
                            </div>
                        </div>

                        {/* File Upload Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                                Additional Documentation
                            </h3>
                            
                            <div className="flex flex-col">
                                <label className="text-slate-700 font-medium mb-2 text-sm">Upload Supporting Documents <span className="text-green-500 font-semibold  ">(Optional)</span></label>
                                <p className="text-slate-500 text-xs mb-3">
                                    Upload any relevant documents such as project requirements, wireframes, design mockups, or technical specifications.
                                </p>
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-yellow-400 file:text-slate-800 hover:file:bg-yellow-500 transition-all duration-200 border border-slate-300 rounded-lg p-3"
                                    />
                                    <p className="text-xs text-slate-500 mt-2">
                                        Supported formats: PDF, DOC, DOCX • Maximum file size: 20MB
                                    </p>
                                </div>
                                {selectedFile && (
                                    <div className="mt-3 p-3 bg-slate-100 rounded-lg border border-slate-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-700 font-medium">📄 {selectedFile.name}</span>
                                            <span className="text-xs text-slate-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center pt-4">
                            <button 
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting || createEstimateMutation.isPending}
                                className="bg-secondary text-dark px-8 py-3 rounded-lg hover:bg-yellow-500 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] transform hover:scale-105 focus:ring-4 focus:ring-yellow-300"
                            >
                                {isSubmitting || createEstimateMutation.isPending ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    'Submit My Estimate'
                                )}
                            </button>
                        </div>

                        <p className="text-center text-slate-500 text-xs mt-4">
                            We'll review your submission and get back to you within 24 hours with a detailed project estimate.
                        </p>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Estimate;