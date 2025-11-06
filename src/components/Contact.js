import { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show success popup for 3 seconds
  const showSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // WhatsApp submit
  const handleWhatsAppSubmit = () => {
    const { name, email, message } = formData;
    const whatsappUrl = `https://wa.me/918867036163?text=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    showSuccess("Message sent via WhatsApp ✅");
  };

  // EmailJS submit
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a8nxc3o",    // Replace with your EmailJS service ID
        "template_wrkdf03",   // Replace with your EmailJS template ID
        formData,
        "atLgI0IVLQPgJvwVP"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          showSuccess("Email sent successfully ✅");
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          console.error(error);
          showSuccess("Failed to send email ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Success Popup */}
      {successMessage && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fadeIn">
          <CheckCircle className="w-5 h-5" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Get In{" "}
        <span className="text-blue-600 relative">
          Touch
          <span className="block w-16 h-[3px] bg-blue-600 mx-auto mt-2 rounded"></span>
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Hey Human, feel free to reach me!
      </p>

      {/* Form + Contact Info */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleEmailSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded"
            rows="5"
            required
          />
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Email
            </button>
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              WhatsApp
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="text-gray-700 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="flex items-center gap-2 mb-2">
            <Mail className="text-blue-600 w-5 h-5" />
            <span>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dheerajsharmar2022@gmail.com"
                className="text-blue-600"
              >
                dheerajsharmar2022@gmail.com
              </a>
            </span>
          </p>
          <p className="flex items-center gap-2 mb-2">
            <MapPin className="text-blue-600 w-5 h-5" />
            <span>
              <strong>Location:</strong> Karnataka, India
            </span>
          </p>
          <p className="mt-4">
            Let's build something amazing together 🚀 <br />
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <p className="mt-4 text-gray-800 font-medium">
            ➤ Currently available for freelance projects <br />
            ➤ Open to remote work opportunities
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          &lt; <span className="text-blue-600">Dheeraj R</span> /&gt;
        </h3>
        <p className="mb-2">Frontend Web Developer • Web3 Explorer</p>
        <p>© 2025 Dheeraj R. All rights reserved.</p>
      </footer>
    </section>
  );
}
