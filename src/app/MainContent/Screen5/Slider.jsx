"use client";
import Image from "next/image";
import { portfolio } from "./Portfolio";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Slider() {
  const [left, setLeft] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [isMove, setIsMove] = useState(false);
  const items = [...portfolio, ...portfolio];
  const itemsR = [...items].reverse();
  const CARD_WIDTH = 453;
  const GAP = 40;
  const totalWidth = items.length * (CARD_WIDTH + GAP);
  const visibleWidth = 1520;
  const animVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div
      className="lg:h-[680px] sm:h-[500px] w-full  flex border-2 border-gray-200 shadow-md overflow-hidden mt-20 bg-gray-50 rounded-xl"
      onPointerDown={(e) => {
        setClientX(e.clientX);
        setIsMove(true);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
      }}
      onPointerMove={(e) => {
        if (!isMove) return;
        const delta = e.clientX - clientX;
        const newLeft = left + delta;
        const minLeft = -(items.length * (CARD_WIDTH + GAP) - visibleWidth);
        const maxLeft = 0;
        setLeft(Math.max(minLeft, Math.min(newLeft, maxLeft)));
        setClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        setIsMove(false);
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
      }}
      onPointerLeave={() => setIsMove(false)}
    >
      <div
        className="max-w-[5885px] w-[5885px] flex flex-col gap-10 pl-5 pt-2 h-auto overflow-y-hidden overflow-x-auto hide-scrollbar"
        style={{ marginLeft: left, scrollbarWidth: "none" }}
      >
        <div
          className={`max-w-[5885px] lg:w-[5085px] sm:w-[3085px]  flex justify-between gap-10 `}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="w-[325px] h-[222px] lg:w-[453px] lg:h-[310px] sm:w-[325px] sm:h-[222px] rounded-2xl"
              initial="hidden"
              whileInView="visible"
              variants={animVariants}
              custom={index - 0.05}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-[325px]  h-[222px]  relative lg:w-[453px] lg:h-[310px] sm:w-[325px] sm:h-[222px] rounded-xl select-none">
                <Image
                  className="rounded-4xl pointer-events-none select-none"
                  src={item.path}
                  fill
                  alt={item.alt ?? "portfolio image"}
                  sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 43vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-[5885px] lg:w-[5085px] w-[3085px] sm:w-[3085px] flex justify-between gap-10 ">
          {itemsR.map((item, index) => (
            <motion.div
              key={`dup-${index}`}
              className="w-[325px] h-[222px] lg:w-[453px] lg:h-[310px] sm:w-[325px] sm:h-[222px]    rounded-xl select-none"
              initial="hidden"
              whileInView="visible"
              variants={animVariants}
              custom={index + 0.05}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="relative w-[325px] h-[222px]  lg:w-[453px] lg:h-[310px] sm:w-[325px] sm:h-[222px] rounded-4xl">
                <Image
                  className="rounded-4xl pointer-events-none select-none"
                  src={item.path}
                  fill
                  alt={item.alt ?? "portfolio image"}
                  sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw, 43vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
