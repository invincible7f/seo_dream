"use client";
import Button from "@/app/Header/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const statistics = [
    { number: "750+", title: "projects finished" },
    { number: "340+", title: "happy clients" },
    { number: "128+", title: "awards" },
  ];

  const initialAnimation = {
    hidden: { scale: 0.95, x: 200, opacity: 0 },
    visible: { scale: 1, x: 0, opacity: 1 },
  };

  const Content = (
    <section className="flex flex-col gap-12 text-slate-800">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold text-[#34cbc2]">ABOUT US</h4>
        <h4 className="text-2xl sm:text-3xl font-extrabold leading-10">
          Top <span className="text-[#34cbc2]">Marketing</span> Agency & Consult
          Your Website With Us
        </h4>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-24 sm:m-auto lg:m-0 lg:gap-12">
        {statistics.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-cyan-600">
              {item.number}
            </h4>
            <span className="text-slate-500">{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="text-slate-500 font-normal leading-[29px] text-sm sm:text-md">
          SEO Dream is free digital marketing CSS template provided by
          TemplateMo website. You are allowed to use this template for your
          business websites. Please DO NOT redistribute this template ZIP file
          on any Free CSS collection websites. You may contact us for more
          information. Thank you.
        </p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <Button
          colorBack="bg-[#4972ca]"
          colorFront="bg-[#34cbc2]"
          text={"Discover Company"}
        />
      </div>
    </section>
  );

  return mounted ? (
    <motion.div
      className="w-full flex flex-col gap-5 text-center lg:w-1/2 lg:text-left sm:w-full sm:text-center"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4 }}
      variants={initialAnimation}
      viewport={{ once: true, amount: 0.3 }}
    >
      {Content}
    </motion.div>
  ) : (
    <div className="w-full flex flex-col gap-5 text-center lg:w-1/2 lg:text-left sm:w-full sm:text-center">
      {Content}
    </div>
  );
}
