"use client";
import Button from "@/app/Header/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContainerInfo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const info = [
    { title: "Agency Status:", value: "Ready Work" },
    { title: "Price:", value: "$720/Month" },
    { title: "Schedules:", value: "$450/Meeting" },
  ];

  const animationVariant = {
    hidden: { opacity: 0, marginLeft: -500 },
    visible: {
      opacity: 1,
      marginLeft: 0,
      transition: { delay: 1.8, duration: 0.5, ease: "easeInOut" },
    },
  };

  const Content = (
    <div className="flex flex-col gap-10 cursor-default">
      <div className="max-w-full  flex flex-col text-slate-800  gap-2 mt-20 items-center justify-center  md:ml-[100px] lg:ml-0 w-full lg:max-w-[600px] xl:w-[500px] sm:w-[410px] md:w-[500px] sm:flex-row sm:justify-between sm:ml-10">
        {info.map((item, index) => (
          <div
            key={index}
            className="justify-between text-[20px] flex flex-col lg:text-[16px] sm:text-[20px] text-center sm:text-left"
          >
            <h3 className="text-slate-500">{item.title}</h3>
            <span className="lg:text-xl font-bold text-[26px] sm:text-[18px]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="-700 w-full flex flex-col gap-12 lg:w-[600px] sm:w-[500px] md:w-[600px] sm:pl-0 md:pl-[100px] lg:pl-0">
        <h1 className="w-full text-[60px] text-center lg:text-[55px] font-extrabold xl:w-[500px] 2xl:w-[600px] lg:text-left sm:text-[60px] sm:text-center bg-gradient-to-r from-[#fa9753] to-[#fe566b] bg-clip-text text-transparent">
          SEO & Digital Marketing Agency
        </h1>
        <div className="w-full flex justify-center lg:justify-start lg:w-auto sm:w-40 sm:ml-44 lg:ml-0">
          <Button
            colorBack="bg-[#4972ca]"
            colorFront="bg-[#34cbc2]"
            text={"Get Your Quote"}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="z-40 absolute lg:top-[130px] lg:scale-100 lg:left-[300px] h-[350px] w-full sm:top-[110px] sm:left-44">
      {mounted ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariant}
          viewport={{ once: true }}
        >
          {Content}
        </motion.div>
      ) : (
        Content
      )}
    </div>
  );
}
