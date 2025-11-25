"use client";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const LoadFiveImage = dynamic(() => import("./LoadFiveImage"), {
  loading: () => <div>Loading images...</div>,
});

export default function HeroOriginStory() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  const [showReadMore, setShowReadMore] = useState<boolean>(false);
  const [showTeam, setShowTeam] = useState<boolean>(false);

  const handleReadMore = () => {
    secondSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = scrollRef.current?.querySelectorAll(".snap-section");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // FIRST section visible → show Read More
          if (
            entry.target.classList.contains("first-section") &&
            entry.isIntersecting
          ) {
            setShowReadMore(true);
            return; // important!
          }

          // Any other section intersects → hide Read More
          if (entry.isIntersecting) {
            setShowReadMore(false);
          }

          // Bottom section visible → reveal /five sites team
          if (
            entry.target.classList.contains("bottom-section") &&
            entry.isIntersecting
          ) {
            setShowTeam(true);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      <section className="snap-section first-section snap-start flex flex-col items-center justify-start w-full h-[80vh] pt-2 px-2">
        <LoadFiveImage />
      </section>
      <section
        ref={secondSectionRef}
        className="snap-section snap-start  tracking-tight leading-tight flex flex-col items-start justify-start w-full min-h-screen z-0 px-2 pt-2    "
      >
        <h1 className=" w-full  text-left z-10  text-4xl p-2  ">FIVE SITES</h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="origin-left border-1 border-inset border-black w-full "
        />
        {/* Text block */}
        <section className="flex flex-col items-baseline justify-start text-left   w-full h-[60vh] pt-2 bg-white text-2xl leading-tight   ">
          <h2 className=" md:max-w-xl  ">
            We left our five months long internship on the first day and took
            their developer with us...
            {showReadMore && (
              <Button
                onClick={handleReadMore}
                variant="wide"
                size="wide"
                className="ml-4 absolute bottom-3.5 right-2 z-40"
              >
                Read more
              </Button>
            )}
          </h2>

          <h2 className="">
            Then someone said all you need is five projects, five sites.
          </h2>

          <h2 className="">
            We decided to create five excellent sites in five months.
          </h2>

          <h2>Five projects. Five different clients.</h2>

          <h2 className=" indent-6 mb-4">
            But how do we define excellence? We broke it down into a list:
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="origin-left border-1 border-inset border-black w-full "
          />
          <div className="snap-start grid grid-cols-1 md:grid-cols-6 w-full ">
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="col-start-2 col-span-2  pt-2 px-8     list-none list-inside    rounded-xl   w-full mb-2"
            >
              <motion.li className="flex gap-x-2">
                1.{" "}
                <span>
                  Excellent choices of technology for the context of the site
                  and its owner/s.
                </span>
              </motion.li>

              <motion.li className="flex gap-x-2">
                2.{" "}
                <span>
                  Excellent structure between the Front, the back and the
                  in-between. We design a complete product. Every aspect matters
                  equally.
                </span>
              </motion.li>

              <motion.li className="flex gap-x-2">
                3.{" "}
                <span>
                  If a site never gets updated its not a site, its an image.
                  Therefore it needs to be managable for the client and easy to
                  maintain.
                </span>
              </motion.li>

              <motion.li className="flex gap-x-2">
                4.{" "}
                <span>
                  The site must include usable tools for the client and should
                  free up time rather than adding tediuos tasks to the
                  todo-list.
                </span>
              </motion.li>

              <motion.li className="flex gap-x-2">
                5. <span>The site does the work for the client</span>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="origin-left border-1  border-inset border-black w-full "
          />

          <div className="snap-section bottom-section flex flex-col items-start justify-between w-full min-h-screen z-0 px-2 pt-2 snap-top snap-mandatory ">
            <span className="flex flex-col items-start justify-start w-full h-full">
              <h2 className="indent-6 md:max-w-xl">
                The projects will be published continously. For updates, sign up
                for our newsletter
                <Button variant="link" size="linkSize" className="ml-1">
                  here
                </Button>
              </h2>
              <h2 className="">
                and follow us on instagram
                <Button variant="link" size="linkSize" className="ml-1">
                  here
                </Button>
              </h2>
            </span>
            <div className="flex items-center justify-start  md:items-start w-full">
              {showTeam && (
                <h2 className="mt-auto uppercase fivesites-logo text-4xl">
                  /five sites team
                </h2>
              )}
            </div>
          </div>
        </section>
      </section>
    </motion.div>
  );
}
