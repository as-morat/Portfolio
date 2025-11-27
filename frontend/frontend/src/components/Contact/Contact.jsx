import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaWhatsapp, FaReddit, FaTelegram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { MdTaskAlt } from "react-icons/md";

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, gradient }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center justify-center
      w-14 h-14 md:w-16 md:h-16 rounded-full
      bg-gradient-to-br ${gradient} text-white text-2xl
      shadow-lg hover:shadow-2xl
      transition-all duration-300 ease-in-out
      hover:scale-110
    `}
  >
    {icon}
  </a>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataWeb3 = new FormData(e.target);
    formDataWeb3.append("access_key", "48963594-0944-4124-b4e2-ba4d1362615a");
    formDataWeb3.append("subject", `New Contact Message from ${formData.name}`);

    const object = Object.fromEntries(formDataWeb3);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        console.log("Web3Forms Success", res);
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Web3Forms Error", error);
      alert("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  // Auto-dismiss notification after 3.5 sec
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const socialLinks = [
    { icon: <FaGithub />, gradient: "from-gray-700 to-gray-900", link: "https://github.com/as-morat" },
    { icon: <FaWhatsapp />, gradient: "from-green-400 to-green-600", link: "https://wa.me/01610855735" },
    { icon: <FaReddit />, gradient: "from-orange-400 to-orange-600", link: "https://www.reddit.com/user/morat9511" },
    { icon: <FaTelegram />, gradient: "from-cyan-400 to-blue-500", link: "https://t.me/raf_bit_76" },
    { icon: <SiX />, gradient: "from-purple-500 to-indigo-600", link: "https://x.com/as_morat" },
    { icon: <FaLinkedin />, gradient: "from-blue-500 to-indigo-600", link: "https://linkedin.com/in/morat46" },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 
      bg-gradient-to-b from-white via-cyan-50 to-indigo-100 overflow-hidden relative"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center relative z-10"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 text-transparent bg-clip-text">
          Contact Me
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-700 mb-12 text-center max-w-xl relative z-10"
      >
        Reach out for projects, questions, or collaborations. Fill in the form and send me a message directly!
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/20 rounded-3xl p-10 flex flex-col gap-6 
        shadow-2xl border border-white/30 relative z-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none 
          focus:ring-2 focus:ring-indigo-400 transition shadow-inner"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none 
          focus:ring-2 focus:ring-indigo-400 transition shadow-inner"
        />
        <textarea
          name="message"
          placeholder="Message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none 
          focus:ring-2 focus:ring-indigo-400 transition resize-none shadow-inner"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full py-3 font-semibold text-white rounded-full
            bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 relative z-10 -mb-2">
        {socialLinks.map((social, i) => (
          <SocialIcon key={i} href={social.link} icon={social.icon} gradient={social.gradient} />
        ))}
      </div>

      {/* Centered Premium Success Notification */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       z-50 bg-indigo-300/20 backdrop-blur-md border border-blue-400
                       rounded-3xl px-10 py-8 flex flex-col items-center gap-4 shadow-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg">
              <MdTaskAlt className="text-6xl text-white drop-shadow-xl animate-bounce" />
            </div>

            <p className="text-blue-400 font-bold text-2xl text-center drop-shadow-md">Success!</p>

            <p className="text-blue-300 font-semibold text-center text-lg">
              Your message has been sent successfully.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-3 px-6 py-2 bg-indigo-500 hover:bg-blue-600 text-white font-medium rounded-full 
                         transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Credit on Curve */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-sm text-center"
        >
          © {new Date().getFullYear()} Ash. All rights reserved.
        </motion.p>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32 md:h-48">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <path d="M0,30 C400,100 800,0 1200,60 L1200,120 L0,120 Z" fill="url(#contactGradient)" />
        </svg>
      </div>
    </section>
  );
}
