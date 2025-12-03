import { motion } from "framer-motion";

export default function Service({ image, title, text, index }) {
  const animVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.div
      className="w-full max-w-[565px] sm:w-[565px] h-[225px] border-2 border-gray-100 rounded-md cursor-default flex items-center gap-4 p-4"
      initial="hidden"
      whileInView="visible"
      whileHover={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      variants={animVariants}
      custom={index}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="shrink-0 flex items-center justify-center w-20 h-20 sm:w-20 sm:h-20">
        <div className="h-20 w-20 rounded-full bg-gray-50 flex justify-center items-center">
          <div className="relative w-[38px] h-[38px]">{image}</div>
        </div>
      </div>

      <section className="flex-1 flex flex-col justify-center gap-2">
        <h5 className="text-slate-800 font-bold text-lg sm:text-2xl">
          {title}
        </h5>
        <p className="text-slate-500 text-sm sm:text-base">{text}</p>
      </section>
    </motion.div>
  );
}
