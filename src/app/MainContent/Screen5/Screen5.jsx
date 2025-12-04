"use client";
import Slider from "./Slider";
import { motion } from "framer-motion";
export default function Screen5() {
  const initialAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <div className="max-w-full w-full pt-28 h-auto  lg:w-full sm:pl-20 sm:pr-20 flex overflow-hidden pb-32">
      <div className=" max-w-full w-full lg:w-[1740px] ">
        <div className="bg-red-50 w-full h-auto flex justify-center items-center">
          <motion.div
            className="flex flex-col justify-center items-center gap-4 w-[500px] px-4"
            variants={initialAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-bold text-[#34cbc2]">OUR PORTFOLIO</h4>
            <h4 className="text-3xl font-extrabold leading-10 text-center text-slate-800">
              Discover Our Recent{" "}
              <span className="text-[#34cbc2]">Projects </span> And{" "}
              <span className="text-cyan-600">Showcases </span>
            </h4>
          </motion.div>
        </div>

        <Slider />
      </div>
    </div>
  );
}
