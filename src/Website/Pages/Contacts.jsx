import { useForm } from "react-hook-form";
import { axiosPublic } from "../../api/axios.jsx";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Users,
} from "lucide-react";
import GoogleMap from "../Components/GoogleMap.jsx";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

function Contacts() {
  const openWhatsApp = () => {
    const phoneNumber = "254706181387";
    const message = "HELLO! I would like to enquire about something.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const sendMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosPublic.post("/messages", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      reset();
      toast.success("Message sent Successfully!");
    },
    onError: () => {
      const errorMessage =
        errors.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append all form fields
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("messageText", data.messageText);

      await sendMutation.mutateAsync(formData);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>Contact Us | Isosoft Softwares</title>
        <meta
          name="description"
          content="Contact Isosoft for professional software development services. Reach out for web development, mobile app development, custom software solutions, and digital transformation projects in Kenya."
        />
        <meta
          name="keywords"
          content=" contact Isosoft, web development contact,contact freelance company, custom software solutions, digital transformation"
        />
      </Helmet>
      <main className="min-h-screen">
        {/* Hero Header Section */}
        <header className="relative py-14 bg-gradient-to-br from-primary via-dark to-primary overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col justify-center gap-6 items-center pt-8">
              {/* Badge */}
              <div className="flex items-center justify-center">
                <span className="inline-flex gap-2 items-center px-6 py-3 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-secondary/30 hover:bg-secondary/30 transition-all duration-300">
                  <MessageCircle className="w-4 h-4 animate-pulse" />
                  Contact Info
                </span>
              </div>

              {/* Main Title */}
              <div className="text-center max-w-4xl">
                <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white leading-tight mb-3">
                  Get In{" "}
                  <span className="text-secondary bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
                    Touch
                  </span>{" "}
                  With Us
                </h1>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent to-secondary mx-auto mb-6 rounded-full"></div>

                <p className="md:text-lg 2xl:text-xl text-light/90 leading-relaxed container mx-auto">
                  Ready to transform your ideas into powerful digital solutions?
                  Our expert team specializes in{" "}
                  <strong className="text-secondary">web development</strong>,
                  <strong className="text-secondary">
                    {" "}
                    mobile applications
                  </strong>
                  , and
                  <strong className="text-secondary">
                    {" "}
                    custom software solutions
                  </strong>
                  . Let's discuss your project and bring your vision to life.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-3 bg-secondary/20 backdrop-blur-sm border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 rounded-full px-6 py-3 text-center">
                <div className="text-secondary gap-2 inline-flex items-center">
                  <div className="bg-secondary rounded-full p-1 animate-pulse"></div>{" "}
                  24/7 support
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Contact Section */}
        <section className="bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-12 2xl:gap-20">
              {/* Contact Form */}
              <div className="flex flex-col container mx-auto gap-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-3xl shadow-md p-4 lg:p-10 hover:shadow-3xl bg-white transition-all duration-500"
                >
                  <div className="space-y-2 mb-6">
                    <div className="flex gap-3 items-center justify-start">
                      <div className="bg-gradient-to-br p-2 from-secondary to-secondary/80 rounded-full flex items-center">
                        <Send className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-lg lg:text-xl font-bold text-primary mb-3">
                        Send us a Message
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Share your thoughts with us and we will respond ASAP!
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Name and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2 h-full">
                        <label className="text-primary font-semibold flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Full Name*
                        </label>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                          className={`w-full p-3 border-2 outline-none rounded-xl transition-all duration-300 ${
                            errors.name
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200 focus:border-secondary focus:bg-secondary/5"
                          }`}
                          placeholder="Name"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm flex items-center gap-1">
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <label className="text-primary font-semibold flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          {...register("phoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[\+]?[0-9][\d]{0,15}$/,
                              message: "Please enter a valid phone number",
                            },
                          })}
                          placeholder="+254712345678"
                          className={`w-full p-3 border-2 outline-none rounded-xl transition-all duration-300 ${
                            errors.phoneNumber
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200 focus:border-secondary focus:bg-secondary/5"
                          }`}
                        />
                        {errors.phoneNumber && (
                          <span className="text-red-500 text-sm">
                            {errors.phoneNumber.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-primary font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address*
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={`w-full p-3 border-2 outline-none rounded-xl transition-all duration-300 ${
                          errors.email
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 focus:border-secondary focus:bg-secondary/5"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="text-primary font-semibold flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Message*
                      </label>
                      <textarea
                        {...register("messageText", {
                          required: "Project details are required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                        className={`w-full p-4 border-2 outline-none rounded-xl resize-none transition-all duration-300 ${
                          errors.messageText
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 focus:border-secondary focus:bg-secondary/5"
                        }`}
                        placeholder="Type your message here..."
                      />
                      {errors.messageText && (
                        <span className="text-red-500 text-sm">
                          {errors.messageText.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || sendMutation.isPending}
                      className="w-full bg-gradient-to-r from-secondary to-secondary/90 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:from-secondary/90 hover:to-secondary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting || sendMutation.isPending ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </button>
                  </div>
                </form>

                {/* Social Media Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 hover:shadow-3xl transition-all duration-500">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Follow Us
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stay connected for updates and insights
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        icon: Instagram,
                        name: "Instagram",
                        link: "#",
                        color: "from-pink-500 to-purple-500",
                      },
                      {
                        icon: Facebook,
                        name: "Facebook",
                        link: "#",
                        color: "from-blue-600 to-blue-800",
                      },
                      {
                        icon: Linkedin,
                        name: "LinkedIn",
                        color: "from-blue-700 to-blue-900",
                      },
                      // { icon: Github, name: "GitHub", link: "https://github.com/peter514", color: "from-gray-700 to-gray-900" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="blank"
                        className="group flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs text-gray-600 text-center group-hover:text-primary transition-colors">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details Card */}
                <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-5 space-y-3 lg:p-8 hover:shadow-3xl transition-all duration-500">
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center justify-start">
                      <div className="bg-secondary p-2 rounded-full">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-lg lg:text-xl font-bold text-primary">
                        Contact Information
                      </h2>
                    </div>

                    <p className="text-gray-600">
                      Multiple ways to reach our expert development team
                    </p>
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    {/* Phone Contact Cards */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-600 rounded-lg">
                          <Phone className='w-5 h-5 text-white'/>
                        </div>
                        <h3 className="font-bold text-blue-800">Phone Numbers</h3>
                      </div>
                      <div className="space-y-2">
                        <a href="tel:+254706181387" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                          +254 706 181 387
                        </a>
                        <a href="tel:+254797936714" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                          +254 797 936 714
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div onClick={openWhatsApp} className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-600 rounded-lg">
                          <FaWhatsapp className='w-5 h-5 text-white'/>
                        </div>
                        <h3 className="font-bold text-green-800">WhatsApp Chat</h3>
                      </div>
                      <p className="text-green-700 font-medium">+254 706 181 387</p>
                      <p className="text-green-600 text-sm mt-1">Click to start chat</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <Mail className='w-5 h-5 text-white' />
                        </div>
                        <h3 className="font-bold text-red-800">Email Address</h3>
                      </div>
                      <a href="mailto:info@isosoftwares.com" className="text-red-700 hover:text-red-900 font-medium transition-colors block">
                        info@isosoftwares.com
                      </a>
                    </div>

                    {/* Location Card */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-600 rounded-lg">
                          <MapPin className='w-5 h-5 text-white' />
                        </div>
                        <h3 className="font-bold text-purple-800">Office Location</h3>
                      </div>
                      <p className="text-purple-700 font-medium">Spur Mall Kimbo</p>
                      <p className="text-purple-600 text-sm">Juja, Kenya</p>
                    </div>
                  </div>

                  {/* Business Hours - Full Width */}
                  <div className="mt-4 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-yellow-600 rounded-lg">
                        <Clock className='w-5 h-5 text-white' />
                      </div>
                      <h3 className="font-bold text-yellow-800">Business Hours</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <p className="text-yellow-700"><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                      <p className="text-yellow-700"><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                      <p className="text-yellow-700"><span className="font-medium">Sunday:</span> Closed</p>
                      <p className="text-yellow-700"><span className="font-medium">Emergency:</span> 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Section */}
            <div className="mt-10">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 md:p-6 py-4 px-2 hover:shadow-md transition-all duration-500">
                <div className="items-center justify-center flex gap-2 mb-4">
                  <div className="bg-gradient-to-br p-2 from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-lg lg:text-xl font-bold text-primary">
                    Our Location
                  </h2>
                </div>
                <p className="text-gray-600 text-center m-3">
                  Located in the heart of Juja, Kenya - Easy to reach and ready
                  to serve
                </p>
                {/* Google Maps Placeholder */}
                <div className="w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-secondary transition-colors duration-300">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contacts;
