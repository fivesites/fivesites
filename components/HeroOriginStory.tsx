"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { TypingText } from "./animate-ui/primitives/texts/typing";

const LoadFiveImage = dynamic(() => import("./LoadFiveImage"), {
  loading: () => <div>Loading images...</div>,
});

export default function HeroOriginStory() {
  return (
    <>
      <motion.div className="w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        {/* SECTION 1 — snaps and has fixed height */}
        <section className="snap-start h-screen flex flex-col items-center justify-start pt-2 px-2">
          <LoadFiveImage />

          {/* five sites + hook */}
          <div className="flex flex-col w-full">
            <h1 className=" text-4xl p-2">FIVE SITES</h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="origin-left border border-black w-full"
            />

            <div className="grid grid-cols-4 text-2xl pt-2 w-full">
              <TypingText
                duration={25}
                text=" We left our five months long internship on the first day and
                brought their developer with us..."
                className=" col-span-4 lg:col-span-2 col-start-1 indent-12 lg:max-w-xl pr-6 lg:pr-0"
              />
            </div>
          </div>
        </section>
        {/* section 2 contetn */}
        <section className="snap-start grid grid-cols-4 text-2xl w-full p-2 leading-tight">
          <h2 className="col-start-1 col-span-4 lg:col-start-1 lg:col-span-2 lg:max-w-xl ">
            Then someone said all you need is five projects, five sites. So we
            decided to create Five excellent sites in five months. Five
            projects. Five different clients.
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
                Excellent choices of technology for the context of the site and
                its owner/s.
              </span>
            </motion.li>
            <motion.li className="flex gap-x-2">
              2.
              <span>
                Excellent structure between the Front, the back and the
                in-between. We design a complete product. Every aspect matters
                equally.
              </span>
            </motion.li>
            <motion.li className="flex gap-x-2">
              3.
              <span>
                If a site never gets updated its not a site, its an image.
                Therefore it needs to be managable for the client and easy to
                maintain.
              </span>
            </motion.li>
            <motion.li className="flex gap-x-2">
              4.
              <span>
                The site must include usable tools for the client and should
                free up time rather than adding tediuos tasks to the todo-list.
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

        {/* SECTION 3 — THIS ONE HAS THE FOOTER */}
        <section className="snap-start grid grid-cols-1 lg:grid-cols-2 px-2 pt-4 text-2xl  space-y-4 mb-4 min-h-screen lg:min-h-[50vh]">
          <div className="col-span-1 lg:col-span-2 col-start-1  flex flex-col justify-between pb-4 lg:pb-2">
            <h2 className="indent-12 md:max-w-xl">
              The projects will be published continously. For updates, sign up
              for our newsletter
              <Button variant="link" size="linkSize" className="ml-1">
                here
              </Button>
            </h2>

            {/* Push footer to bottom */}

            <h2 className=" indent-12 md:max-w-xl uppercase fivesites-logo text-4xl">
              /five sites team
            </h2>
          </div>
        </section>
      </motion.div>
    </>
  );
}
