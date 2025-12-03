import Image from "next/image";
import { contacts } from "./contacts";

export default function RSideWindow() {
  return (
    <div className="w-full cursor-default  lg:w-[266px] sm:w-full h-[334px] flex justify-center items-center p-10 border border-slate-200 rounded-lg lg:-mt-6.5">
      <div className="flex flex-col gap-3">
        {contacts.map((item, index) => (
          <div
            key={item.id ?? index}
            className="flex flex-col items-center gap-3 mb-4"
          >
            <div
              className="relative w-8 flex justify-center items-center"
              style={{
                height:
                  index === 0
                    ? "22px"
                    : index === 1
                    ? "31px"
                    : index === 2
                    ? "33px"
                    : "auto",
              }}
            >
              <Image
                src={item.path}
                fill
                alt={item.alt ?? item.text}
                loading="lazy"
                sizes="100vw"
              />
            </div>
            <span className="  text-slate-400">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
