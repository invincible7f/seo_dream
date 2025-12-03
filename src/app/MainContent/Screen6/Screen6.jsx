"use client";
import Image from "next/image";
import RSideWindow from "./RSideWindow";
import Button from "@/app/Header/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Screen6() {
  const initialAnimation = {
    hidden: {
      y: 50,
      scale: 0.9,
      opacity: 0,
    },
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

  const Button = (
    <div className="relative inline-block group">
      <div
        className={`absolute inset-0 translate-y-1 bg-[#4972ca] rounded-2xl 
                    transition-all ease-in-out duration-200 cursor-pointer 
                    group-hover:scale-[0.98] group-hover:translate-y-0.5`}
        aria-hidden="true"
      />
      <button
        className={`relative z-10 px-5 py-2 text-sm xl:text-[16px] text-white rounded-2xl bg-[#34cbc2]
                    transition-all ease-in-out duration-200 cursor-pointer 
                    group-hover:scale-[0.98] group-hover:translate-y-0.5`}
        aria-label="Send Message Now"
        onClick={(event) => {
          event.preventDefault();
          if (
            data.name &&
            data.surname &&
            data.email &&
            data.subject &&
            data.message
          ) {
            alert(
              `Message sent!\nName: ${data.name}\nSurname: ${data.surname}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`
            );
          } else {
            alert("Please fill in all required fields.");
          }
          setData({
            name: "",
            surname: "",
            email: "",
            subject: "",
            message: "",
          });
        }}
      >
        Send Message Now
      </button>
    </div>
  );

  return (
    <div className="relative w-full flex flex-col min-h-screen ">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/contact-bg.jpg"
          fill
          alt="image"
          loading="lazy"
          sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 43vw"
        />
      </motion.div>

      <div className="relative z-10 w-full flex justify-center items-center py-20 pl-2 pr-2 sm:pr-0 sm:pl-0">
        <motion.div
          className="w-full lg:max-w-[1296px] sm:max-w-[596px] lg:h-auto pb-20  bg-white rounded-4xl flex flex-col gap-6 p-10 pt-16 items-center shadow-lg"
          variants={initialAnimation}
          initial={"hidden"}
          whileInView={"visible"}
        >
          <div className="flex flex-col gap-4 max-w-[480px] text-slate-800 text-center">
            <h5 className="font-bold text-[#34cbc2]">CONTACT US</h5>
            <h4 className="text-3xl font-extrabold leading-10">
              Fill Out The Form Below To
              <span className="text-cyan-600"> Get</span> In
              <span className="text-[#34cbc2]"> Touch</span> With Us
            </h4>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
            <form className="w-full max-w-[846px]">
              <div className=" flex flex-col lg:flex-row lg:flex-wrap gap-5">
                <input
                  onChange={(event) => {
                    setData({ ...data, name: event.target.value });
                  }}
                  type="text"
                  placeholder="Name"
                  className=" lg:w-[359px] xl:w-[411px] h-[46px] border border-slate-300 rounded-lg p-2 text-slate-500"
                  value={data.name}
                />
                <input
                  onChange={(event) => {
                    setData({ ...data, surname: event.target.value });
                  }}
                  type="text"
                  placeholder="Surname"
                  className=" lg:w-[359px] xl:w-[411px] h-[46px] border border-slate-300 rounded-lg p-2 text-slate-500"
                  value={data.surname}
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className=" lg:w-[359px] xl:w-[411px] h-[46px] border border-slate-300 rounded-lg p-2 text-slate-500"
                  value={data.email}
                  onChange={(event) => {
                    setData({ ...data, email: event.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className=" lg:w-[359px] xl:w-[411px] h-[46px] border border-slate-300 rounded-lg p-2 text-slate-500"
                  value={data.subject}
                  onChange={(event) => {
                    setData({ ...data, subject: event.target.value });
                  }}
                />
                <textarea
                  placeholder="Message"
                  className="col-span-2 p-2 h-40  border border-slate-300 w-full rounded-lg text-slate-500"
                  value={data.message}
                  onChange={(event) => {
                    setData({ ...data, message: event.target.value });
                  }}
                />
                <div className=" w-full">{Button}</div>
              </div>
            </form>

            <RSideWindow />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
