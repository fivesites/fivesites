"use client";

import { AnimatePresence } from "framer-motion";
import ScrollSection from "./ScrollSection";
import TextCarousel from "./TextCarousel";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="font-zirkonMedium text-xl lg:text-3xl lg:tracking-tight">
      {/* TEXT CAROUSEL 1 */}

      <ScrollSection className="h-[400vh] grid grid-cols-5 lg:grid-cols-12">
        {(progress) => (
          <TextCarousel
            progress={progress}
            texts={[
              "We left our internship on the first day and took their developer with us...",
              "We realized we all shared the same belief that websites still matter in 2025.",
              "To prove this, we will create five excellent sites for five clients.",
              "How do we define excellence?",
            ]}
          />
        )}
      </ScrollSection>

      {/* LIST 1 */}

      <ScrollSection className="grid grid-cols-5 lg:grid-cols-12 h-[300vh] space-y-12 -mt-[40vh]">
        <ul className="col-span-5 lg:col-span-12 grid grid-cols-5 lg:grid-cols-12 space-y-6">
          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            1.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            Excellent choices of technology for the context of the site and its
            owner’s.
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            2.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            Excellent structure between the front, the back, and the in-between.
            We design a complete product where each aspect matters equally.
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            3.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            If a site never gets updated, it’s not a site, it’s an image.
            Therefore, it needs to be manageable for the client and easy to
            maintain.
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            4.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            The site must include usable tools for the client and should free up
            time rather than adding tedious tasks to the to-do list
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            5.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            The site does the work for the client. The client should not be an
            employee of the site.
          </li>
        </ul>
        {/* MIDDLE TEXT ABOUT CLIENTS */}
        <div className="col-span-5 lg:col-span-12 grid grid-cols-5 lg:grid-cols-12  space-y-6 mt-12">
          <div className="col-start-1 col-span-5 lg:col-start-4 lg:col-span-7 ">
            We have gathered five potential clients; their names or the names of
            the brands/businesses they represent are not relevant yet, but they
            exist in different contexts not dependent on each other.
          </div>

          <div className="col-start-1 col-span-5 lg:col-start-4 lg:col-span-7 ">
            They represent different archetypes of website owners, in many ways
            small businesses without huge resources.
          </div>
        </div>

        {/* CLIENT LIST */}

        <ul className="col-span-5 lg:col-span-12 grid grid-cols-5 lg:grid-cols-12  space-y-6">
          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            1.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            the arts & literature magazine with a subscription model
          </li>
          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            2.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            “the newly founded agency”
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            3.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            “the vintage-fashion brand”
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            4.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            “the artist”
          </li>

          <span className="col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
            5.
          </span>
          <li className="col-start-2 col-span-4 lg:col-start-6 lg:col-span-6">
            our own site, since communication and marketing are crucial.
          </li>
        </ul>
        {/* TEXT WITH LINK */}
        <div className="col-start-1 col-span-5 lg:col-start-4 lg:col-span-7  mt-12">
          The projects will be posted here on this site as we complete them. If
          you are interested in following our journey, you can subscribe to our
          newsletter{" "}
          <Link href="#" className="underline">
            here.
          </Link>
        </div>
      </ScrollSection>

      {/* FINAL TEXT CAROUSEL */}

      <ScrollSection className="h-[400vh] grid grid-cols-5 lg:grid-cols-12 text-center">
        {(progress) => (
          <TextCarousel
            progress={progress}
            texts={[
              'Oh, and we are calling the project <span class="font-zirkonBold">FIVE SITES</span>',
              "see you soon",
              "/ Joel, Justus & Massi",
            ]}
          />
        )}
      </ScrollSection>
    </div>
  );
}
