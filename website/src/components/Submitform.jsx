import React from "react";
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaMessage } from 'react-icons/fa6';

const Submitform = () => {

  function handleSubmit(e) {
    const details = document.querySelector("form");
    e.preventDefault();
    console.log("Form submitted");

    const name = details.querySelector("input[name='Name']").value.trim();
    const phone = details.querySelector("input[name='Telephone']").value.trim();
    const email = details.querySelector("input[name='Email']").value.trim();
    const message = details.querySelector("textarea[name='Message']").value.trim();

    
    if (!name || !phone || !email || !message) {
      toast.error("Please fill in all fields before submitting");
      return;
    }

    try {
      const formData = new FormData(details);
      fetch("https://script.google.com/macros/s/AKfycbzhNkivfRNaJyJB3O6-qw6K1oIwIF4gSREp-n67DJaimMuDAXJ-8VeARBsmDY_rdEIyDA/exec", {
        method: "POST",
        body: formData
      })

      toast.success("Message sent successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      details.reset();





    } catch (error) {
      toast.error("Message not sent", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }



  }

  return (
    <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-5 space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Get in Touch
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill out the form below and we’ll get back to you soon.
        </p>

        <div className="flex flex-col gap-2 form">
          <label className="text-gray-700 font-medium flex items-center gap-2">
            <FaUserAlt /> Full Name
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"

          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium flex items-center gap-2">
            <FaPhoneAlt /> Telephone
          </label>
          <input
            type="text"
            name="Telephone"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"

          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium flex items-center gap-2">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            name="Email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"

          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium flex items-center gap-2"><FaMessage/>Message</label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            rows="4"
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"

          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition duration-300"
        >
          <FaPaperPlane /> Submit
        </button>

      </div>
    </div>
  );

};

export default Submitform;
