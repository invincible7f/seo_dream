import { features } from "./features";
import Progress from "./Progress";
import Screen2ContentBlock from "./Screen2ContentBlock";
export default function Screen2() {
  const progress = [
    {
      percent: 80,
      text: "HTML/CSS/JS",
    },
    {
      percent: 60,
      text: "WORDPRESS",
    },
    {
      percent: 90,
      text: "MARKETING",
    },
    {
      percent: 70,
      text: "PHOTOSHOP",
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl  pl-5 pr-5 pt-[550px] lg:max-w-full flex lg:pl-[140px] flex-wrap xl:pr-[300px]  xl:pl-[300px] lg:pt-[100px] sm:w-full sm:pr-[100px] sm:pt-2.5 sm:pl-[100px] ">
      <div className="w-full  ">
        <div className="h-auto lg:max-w-full xl:max-w-full bg-gray-100 rounded-[60px] pb-12 ">
          <div className="flex  justify-between items-center flex-col h-auto pb-20 pt-20   bg-white lg:pt-0  lg:pb-0 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[45px] lg:flex-row lg:gap-0 sm:flex-col sm:pb-20 sm:pt-20 ">
            {features.map((item, index) => (
              <Screen2ContentBlock
                key={index}
                imageTop={item.imageTop}
                titleImage={item.titleImage}
                title={item.title}
                text={item.text}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-col gap-20 lg:gap-0  lg:flex-row lg:pl-7 lg:pr-7 xl:pl-10 xl:pr-10 2xl:pl-20 2xl:pr-20 justify-between items-center  mt-20 lg:mt-16">
            {progress.map((item) => (
              <Progress
                key={item.text}
                progress={item.percent}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
