"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  // Show after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function handleConsent() {
    setShow(false);
  }

  // ===== 🍪 STAGGERED ENTRANCE CONTAINER =====
  const cookieContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // ===== 🍪 INITIAL ENTRANCE =====
  const cookieEntrance: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // ===== 🍪 INFINITE FLOATING LOOP =====
  const floatLoop: Variants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cookie-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 lg:bottom-0 lg:top-auto left-0 w-full h-screen lg:h-[50vh] z-40 p-4  flex flex-col items-center justify-start right-auto backdrop-blur-xs lg:justify-end lg:items-end"
        >
          {/* Consent Box */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center bg-lime-400 w-full max-w-md p-4 border-2 border-black space-y-4"
          >
            <p className="text-sm font-mono text-center">
              This website uses cookies to enhance the user experience.
            </p>

            <div className="flex items-center justify-center gap-4 w-full px-2">
              <Button
                asChild
                onClick={handleConsent}
                variant="secondary"
                className="w-1/2"
              >
                <Link href="/privacy-policy">Learn more</Link>
              </Button>

              <Button
                onClick={handleConsent}
                variant="default"
                className="w-1/2"
              >
                Accept & Close
              </Button>
            </div>
          </motion.div>

          {/* ===== 🍪 STAGGERED + FLOATING COOKIES ===== */}
          <motion.div
            variants={cookieContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Cookie 1 */}
            <motion.div
              variants={cookieEntrance}
              className="absolute left-4 bottom-12"
            >
              <motion.div variants={floatLoop} animate="animate">
                <Image
                  src="/img/Choc-Chip-Cookie.png"
                  alt="Choc-Chip-Cookie"
                  width={80}
                  height={80}
                />
              </motion.div>
            </motion.div>

            {/* Cookie 2 */}
            <motion.div
              variants={cookieEntrance}
              className="absolute right-4 bottom-32"
            >
              <motion.div variants={floatLoop} animate="animate">
                <Image
                  src="/img/Cookie.png"
                  alt="Cookie"
                  width={80}
                  height={80}
                />
              </motion.div>
            </motion.div>

            {/* Cookie 3 */}
            <motion.div
              variants={cookieEntrance}
              className="absolute left-1/2 -translate-x-1/2 bottom-20"
            >
              <motion.div variants={floatLoop} animate="animate">
                <Image
                  src="/img/Oreo_biscuits_(transparent_background).png"
                  alt="Oreos"
                  width={80}
                  height={80}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
