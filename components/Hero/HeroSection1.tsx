import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { TypingText } from "../animate-ui/primitives/texts/typing";

const LoadFiveImage = dynamic(() => import("../LoadFiveImage"), {
  loading: () => <div>Loading images...</div>,
});

export default function HeroSection1() {
  return (
    <div className="snap-start h-screen flex flex-col items-center justify-start pt-2 px-2 w-full">
      <LoadFiveImage />

      <div className="flex flex-col w-full">
        <h1 className="text-4xl p-2">FIVE SITES</h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="origin-left border border-black w-full"
        />

        <div className="grid grid-cols-4 text-2xl pt-2 w-full ">
          <TypingText
            duration={25}
            text="We left our five months long internship and took their developer with us..."
            className="col-span-4 lg:col-span-2 indent-12"
          />
        </div>
      </div>
    </div>
  );
}
