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
        <div className=" w-full flex justify-center items-center lg:pl-1">
          <motion.div
            className=" flex flex-col justify-start items-center gap-4  w-[500px]  pr-32 sm:pr-0 "
            variants={initialAnimation}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {" "}
            <h4 className=" font-bold text-[#34cbc2] ">OUR PORTFOLIO</h4>
            <h4 className="text-3xl font-extrabold leading-10 w-72 sm:w-auto text-center">
              Discover Our Recent{" "}
              <span className="text-[#34cbc2] ">Projects </span> And{" "}
              <span className="text-cyan-600">Showcases </span>
            </h4>
          </motion.div>
        </div>
        <Slider />
      </div>
    </div>
  );
}
