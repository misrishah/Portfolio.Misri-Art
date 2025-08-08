import React, { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 mb-4 bg-gray-100 text-sm font-medium rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re looking for a custom artwork, a creative project, or just want to connect, I’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-200"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-600"
                    : isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-black/90"
                }`}
              >
                {isSubmitted ? (
                  <>Message Sent</>
                ) : isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="mt-6 p-6 bg-gray-100 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">Let's Create Something Unique</h4>
              <p className="text-gray-600 mb-4">
                Interested in a customized artwork or a creative collaboration? Whether it's a commissioned piece or a joint project, I’d love to bring ideas to life.
              </p>

              <h4 className="text-lg font-semibold mb-3">Custom Orders & Collaborations</h4>
              <p className="text-gray-600 mb-4">
                I’m open to working on personalized designs, artwork commissions, and unique creative projects. Let’s chat and make something meaningful together!
              </p>

              <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
              <p className="text-gray-600 mb-4">
                For inquiries or to discuss your ideas, reach out via email or fill out the form. I’ll get back to you as soon as possible!
              </p>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("name")?.focus();
                }}
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                Start a project <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
