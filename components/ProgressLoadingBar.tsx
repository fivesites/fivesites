"use client";
import { motion } from "framer-motion";

function LoadingBar() {
  return (
    <motion.div className="w-full h-3 bg-white border-[0.025rem] overflow-hidden shadow-inner-md rounded">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-green-500 "
      />
    </motion.div>
  );
}

export default function ProgressLoadingBar() {
  return (
    <div className="fixed bottom-0 left-0 p-2 flex w-full gap-x-0 items-center justify-center h-auto">
      <LoadingBar />
      <div className="text-center flex items-center justify-center text-xs w-auto px-2 bg-white h-6">
        <h2 className="tracking-widest">0/5</h2>
      </div>
    </div>
  );
}
