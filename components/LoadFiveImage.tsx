"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadFiveImage() {
  const fiveImages = [
    "5_rupees_reverse.jpg",
    "stephans_quintet_2009.jpg",
    "1985_rover_quintet.jpg",
    "squier_precision_5_string.jpg",
    "bundesstrasse_5.png",
    "dice_2005.jpg",
    "fenerbahce_number_5.jpg",
    "five_guys_baltimore.jpg",
    "five_star_chicken.jpg",
    "green_sparkle_headstock.jpg",
    "gummi_baeren_3.jpg",
    "hausnummer_5_frankreich.jpg",
    "hotel_atlantic_5_star.jpg",
    "number_5_ford_speedster.jpg",
    "schalthebel_pentasport.jpg",
    "jacksons_1976.jpg",
  ];
  const gridCols = [
    "col-start-1 md:col-start-1",
    "col-start-1 md:col-start-2",
    "col-start-1 md:col-start-3",
    "col-start-1 md:col-start-4",
  ];

  const [currentImage, setCurrentImage] = useState("");
  const [randomCol, setRandomCol] = useState(gridCols[0]);

  const pickRandom = () => {
    const randomImage =
      fiveImages[Math.floor(Math.random() * fiveImages.length)];
    const randomColIndex = Math.floor(Math.random() * gridCols.length);

    setCurrentImage(randomImage);
    setRandomCol(gridCols[randomColIndex]);
  };

  useEffect(() => {
    pickRandom();
    const interval = setInterval(pickRandom, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomFiveAlt = currentImage.split(".")[0];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-4 h-[75vh] w-full relative items-center justify-center ">
      <div className={`col-span-4 md:col-span-1 relative w-full h-[80vh]`}>
        <AnimatePresence mode="wait">
          {currentImage && (
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 z-0 "
            >
              <div className="absolute inset-0 bg-[url('/noise.svg')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-20 mix-blend-multiply" />

              <Image
                src={`/img/fiveimages/${currentImage}`}
                alt={randomFiveAlt}
                fill
                className="object-contain object-top-left w-full max-h-[40vh]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
