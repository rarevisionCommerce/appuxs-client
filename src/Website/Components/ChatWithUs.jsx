import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoWhatsapp, IoMdSend } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import whatsappNumber from "../../utils/whatsappNumber";
import Logo from "../../assets/Logo.png"

function ChatWithUs() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const location = useLocation();
  const { pathname } = location;

  // Show notification badge after 3 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // function to generate
  function generateRandomString(length) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const [clientIdFromStorage, setclientIdFromStorage] = useState("");

  const toggleChat = () => {
    if (!isChatOpen) {
      // When opening chat, hide notification and start typing simulation
      setShowNotification(false);
      setIsChatOpen(true);
      
      // Start typing simulation after a brief delay
      setTimeout(() => {
        setShowTyping(true);
      }, 500);

      // Show welcome message after typing simulation
      setTimeout(() => {
        setShowTyping(false);
        setShowWelcomeMessage(true);
      }, 4000);
    } else {
      setIsChatOpen(false);
      // Reset states when closing
      setShowWelcomeMessage(false);
      setShowTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Create WhatsApp URL with the message
      const whatsappUrl = `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');
      setMessageText(""); // Clear the input after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`fixed right-4 bottom-4 z-50 ${
        (pathname.includes("dashboard") || pathname.includes("login")) &&
        "hidden"
      }`}
    >
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="relative">
          <button
            onClick={toggleChat}
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-400 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse flex items-center space-x-3"
          >
            <FaWhatsapp size={40} className="relative z-10" />
          </button>
          
          {/* Notification Badge */}
          {showNotification && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ">
              1
            </div>
          )}
        </div>
      )}

      {/* Chat Widget */}
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={toggleChat}
          />

          <div className="fixed bottom-4 right-4 w-[calc(100vw-2rem)] max-w-sm md:w-96 bg-white rounded-2xl shadow-2xl  overflow-hidden transition-all duration-300 transform">
            {/* Header */}
            <div className="relative bg-primary px-6 py-4">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    
                    <div className="flex flex-col items-center space-x-2">
                      <img src={Logo} className="h-12 w-12"/>
                      <div className="flex gap-2 justify-center items-center ">
                        <div className="w-2  h-2 mt-1 bg-green-500 rounded-full"></div>
                      <p className="text-white ">
                        {showTyping ? "Typing..." : "Online"}
                      </p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleChat}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <IoCloseSharp color="white" size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="bg-chat-bg bg-cover p-6 min-h-[200px] relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl translate-x-12 translate-y-12"></div>

              {/* Typing Indicator */}
              {showTyping && (
                <div className="relative rounded-2xl rounded-tl-sm p-4 shadow-sm   mb-4">
                  <div className="flex items-start space-x-3">
                    
                    <div className="flex-1">
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Welcome Message */}
              {showWelcomeMessage && (
                <div className="relative bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-tertiary/30 max-w-[85%]">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">I</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-dark text-sm mb-1">
                        Isosoft Softwares
                      </p>
                      <p className="text-dark text-sm leading-relaxed">
                        👋 Hi there! Welcome to Isosoft Softwares.
                      </p>
                      <p className="text-dark text-sm leading-relaxed mt-2">
                        How can we help you today?
                      </p>
                    </div>
                  </div>

                  {/* Message timestamp */}
                  <p className="text-xs text-gray-400 mt-3 text-right">
                    Just now
                  </p>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="p-3 border-t items-center gap-2 bg-primary/10 flex">
              <input 
                placeholder="Type a Message" 
                type="text" 
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="p-3 outline-none rounded-3xl w-full"
              />
              <button
                onClick={handleSendMessage}
                className="cursor-pointer"
              >              
                <IoMdSend className="h-9 w-9 text-primary hover:text-primary/80 transition-colors" /> 
              </button>
            </div>

            {/* Trust indicators */}
            <div className="px-6 pb-4">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Fast Reply</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatWithUs;