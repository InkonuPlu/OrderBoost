import React, { useState , useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { th } from 'framer-motion/client';
const Explore = () => {
  const Form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_40g1b5j', 'template_k0fcfz6', Form.current, 'BEywzyzmq3G3ABthV')

  };


  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

 const handleSubmit = (e) => {
  e.preventDefault();
  sendEmail(e);
  setForm({ name: '', email: '', subject: '', message: '' });
};


  return (
    <main className="pt-32 px-6 min-h-screen bg-[#0e0e10] text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get Your First Order
      </motion.h2>

      <p className="mt-4 text-white/70 text-center max-w-2xl mx-auto">
        Fill In This form With your Order. <br /> once u click the sebmit button, we will get your order and contact you as soon as possible. so feel free to check your email for updates.
      </p>

      <motion.form
        ref={Form}
        onSubmit={handleSubmit} 
        className="mt-10 max-w-2xl mx-auto space-y-6 bg-[#1a1a1d] p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 bg-[#0e0e10] border border-white/10 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 bg-[#0e0e10] border border-white/10 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#0e0e10] border border-white/10 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#0e0e10] border border-white/10 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </main>
  );
};

export default Explore;
