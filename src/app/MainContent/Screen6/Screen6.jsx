"use client";
import Image from "next/image";
import RSideWindow from "./RSideWindow";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Screen6() {
  const initialAnimation = {
    hidden: { y: 50, scale: 0.9, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = true;
    if (!data.surname.trim()) newErrors.surname = true;
    if (!data.subject.trim()) newErrors.subject = true;
    if (!data.message.trim()) newErrors.message = true;

    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      newErrors.email = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = (event) => {
    event.preventDefault();

    if (validate()) {
      alert(
        `Message sent!\nName: ${data.name}\nSurname: ${data.surname}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`,
      );

      setData({ name: "", surname: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  const getStyle = (fieldName) => `
    lg:w-[359px] xl:w-[411px] h-[46px] border rounded-lg p-2 transition-colors
    ${errors[fieldName] ? "border-red-500 bg-red-50" : "border-slate-300"} 
    text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#34cbc2]
  `;

  return (
    <div className="relative w-full flex flex-col min-h-screen">
      <div className="relative z-10 w-full flex justify-center items-center py-20 px-4">
        <motion.div
          className="w-full lg:max-w-[1296px] sm:max-w-[596px] bg-white rounded-4xl flex flex-col gap-6 p-10 pt-16 items-center shadow-lg"
          variants={initialAnimation}
          initial="hidden"
          whileInView="visible"
        >
          <form className="w-full max-w-[846px]">
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5">
              <input
                type="text"
                placeholder="Name"
                className={getStyle("name")}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Surname"
                className={getStyle("surname")}
                value={data.surname}
                onChange={(e) => setData({ ...data, surname: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your email"
                className={getStyle("email")}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className={getStyle("subject")}
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
              <textarea
                placeholder="Message"
                className={`w-full p-2 h-40 border rounded-lg text-slate-500 transition-colors focus:outline-none focus:ring-1 focus:ring-[#34cbc2]
                  ${errors.message ? "border-red-500 bg-red-50" : "border-slate-300"}`}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />

              <div className="w-full">
                <button
                  type="button"
                  onClick={handleSend}
                  className="px-5 py-2 text-white rounded-2xl bg-[#34cbc2] hover:bg-[#2eb5ad] transition-all"
                >
                  Send Message Now
                </button>
              </div>
            </div>
          </form>
          <RSideWindow />
        </motion.div>
      </div>
    </div>
  );
}
