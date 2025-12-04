"use client";
import { discover } from "./discover";
import Service from "./Service";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Screen4() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const initialAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const TitleBlock = (
    <div className="flex flex-col gap-4 w-[480px] sm:pl-0 sm:pr-0 pl-12 pr-12">
      <h4 className="font-bold text-[#34cbc2] text-center ">OUR SERVICES</h4>
      <h4 className="text-3xl font-extrabold leading-10 text-center text-slate-800">
        Discover What We Do & <span className="text-cyan-600">Offer</span> To
        Our
        <span className="text-[#34cbc2]"> Clients</span>
      </h4>
    </div>
  );

  const ServicesBlock = (
    <div className="max-w-full h-auto flex-col justify-center items-center lg:w-[1905px] lg:pl-20 lg:pr-20 flex xl:flex-row xl:flex-wrap gap-6 pt-16 sm:w-full sm:flex-col sm:justify-center sm:items-center">
      {discover.map((item, index) => (
        <Service
          image={item.image}
          title={item.title}
          text={item.text}
          key={index}
          index={index}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-full w-full flex h-auto pt-36 lg:w-[1905px] sm:w-full">
      <div className="flex flex-col items-center justify-center w-full">
        {mounted ? (
          <motion.div
            variants={initialAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {TitleBlock}
          </motion.div>
        ) : (
          TitleBlock
        )}

        {mounted ? <div>{ServicesBlock}</div> : ServicesBlock}
      </div>
    </div>
  );
}
