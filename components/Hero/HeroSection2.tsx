"use client";
import { motion } from "framer-motion";

export default function HeroSection2() {
  return (
    <section className="snap-start grid grid-cols-4 text-2xl w-full h-screen p-2 leading-tight">
      <h2 className="col-start-1 col-span-4 lg:col-start-1 lg:col-span-2 lg:max-w-xl ">
        Then someone said all you need is five projects, five sites. So we
        decided to create Five excellent sites in five months. Five projects.
        Five different clients.
      </h2>
      <h2 className="indent-12 col-span-4 lg:col-span-2  col-start-1 lg:col-start-1  lg:max-w-xl">
        But how do we define excellence?
      </h2>
      <h2 className=" mb-4 col-span-4 lg:col-span-2 lg:col-start-1  lg:max-w-xl">
        We broke it down into a list:
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="origin-left border-b-2 border-black w-full col-span-4"
      />

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" snap-start col-start-1 col-span-4 lg:col-start-2 lg:col-span-2 pt-2 px-8 list-none list-inside rounded-xl w-full space-y-2"
      >
        <motion.li className="flex gap-x-2">
          1.
          <span>
            Excellent choices of technology for the context of the site and its
            owner/s.
          </span>
        </motion.li>
        <motion.li className="flex gap-x-2">
          2.
          <span>
            Excellent structure between the Front, the back and the in-between.
            We design a complete product. Every aspect matters equally.
          </span>
        </motion.li>
        <motion.li className="flex gap-x-2">
          3.
          <span>
            If a site never gets updated its not a site, its an image. Therefore
            it needs to be managable for the client and easy to maintain.
          </span>
        </motion.li>
        <motion.li className="flex gap-x-2">
          4.
          <span>
            The site must include usable tools for the client and should free up
            time rather than adding tediuos tasks to the todo-list.
          </span>
        </motion.li>
        <motion.li className="flex gap-x-2">
          5. <span>The site does the work for the client</span>
        </motion.li>
      </motion.ul>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="origin-left border-b-2 border-black w-full mt-4 col-span-4"
      />
    </section>
  );
}
