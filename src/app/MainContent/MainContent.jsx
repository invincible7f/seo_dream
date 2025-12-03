"use client";
import MainScreen from "./MainScreen.jsx/MainScreen";
import Screen2 from "./Screen2/Screen2";
import Screen3 from "./Screen3/Screen3";
import Screen4 from "./Screen4/Screen4";
import Screen5 from "./Screen5/Screen5";
import Screen6 from "./Screen6/Screen6";

export default function MainContent() {
  return (
    <main className=" max-w-full w-full overflow-hidden">
      <MainScreen />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
    </main>
  );
}
