"use client";

import Brain from "@/components/brain";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSKillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              enim dolor voluptate inventore quo a doloremque voluptatum itaque
              culpa placeat. Obcaecati veritatis laudantium tempore, expedita
              perferendis quia, minima ex ad asperiores maxime, sapiente iure.
              Nesciunt tempora reprehenderit est vero neque voluptatem
              repudiandae, aliquid eum dicta quam mollitia officia cupiditate
              dolorum impedit eligendi quae commodi. Cumque reiciendis quam,
              iste doloremque esse porro earum sapiente itaque consequatur,
              officiis quasi deleniti adipisci odio accusantium tenetur quo
              aspernatur voluptatem, id molestias. Alias, quibusdam asperiores
              repellendus nemo excepturi molestias earum cumque. Cumque
              temporibus, eos exercitationem officiis perferendis, magni tempora
              voluptates optio, doloremque architecto aspernatur vel.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut
              perspiciatis non sequi, placeat sunt! Voluptates error laboriosam
              pariatur natus porro veniam tenetur explicabo hic.
            </span>
            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              <svg
                width="369"
                height="77"
                viewBox="0 0 923 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M396 33C390.239 35.5755 383.207 38.6664 378.111 41.4444C371.885 44.8388 349.96 56.5105 346 64.7778C340.89 75.4454 359.59 81.2655 363 83.4444C367.693 86.4434 373.468 88.4962 376.667 93.0556C385.291 105.349 372.674 114.573 364.056 120.722C350.245 130.576 328.338 140.214 311.389 143.222C307.621 143.891 298.986 145.468 300 141.778C301.958 134.655 310.118 130.913 316 126.444C328.508 116.944 341.944 108.732 355 100C369.932 90.0136 428.774 52.3912 444.222 38.2222C449.053 33.7913 458.609 26.4052 454.389 21.3889C448.781 14.7218 436.962 18.1269 428.333 19.3333C404.371 22.684 380.897 28.995 357.444 34.9444C284.783 53.3768 210.969 76.1915 139.722 99.1111C107.84 109.367 76.0007 119.782 44.4444 131C30.2979 136.029 15.4105 139.895 2.66667 147.833C-1.73682 150.576 13.1423 148.386 18.2222 147.333C51.5747 140.422 153.413 112.699 179.333 105.778C210.134 97.5531 240.862 89.0526 271.722 81.0556C304.072 72.6726 357.723 58.1331 394.167 53.8889C447.221 47.7102 403.711 73.9633 422.444 74.7778C424.288 74.8579 433.316 73.2351 435.889 74.8889C439.974 77.5148 431.501 83.3776 434.056 86.5556C437.022 90.2456 443.304 88.6735 447.778 90.2222C455.247 92.8078 459.153 94.7255 459.722 103.611C461.288 128.059 436.742 155.825 412.333 157C403.511 157.425 402.801 152.543 409.333 147.222C416.53 141.36 424.734 136.838 432.722 132.111C486.288 100.417 465.662 116.029 524.611 79.5556C545.107 66.8741 579.881 45.5099 597.667 25.5556C615.855 5.14873 586.464 13.9902 582.667 25.8889C577.613 41.7251 587.648 54.2516 594.556 67C608.336 92.4335 629.792 118.857 597.333 142.389C560.379 169.179 501.991 176.508 460.833 181.333C421.366 185.96 381.618 188.51 341.889 189.333C284.231 190.528 158.473 186.03 98.3333 176.667C67.1807 171.816 11.314 160.436 78.7778 141.333C121.385 129.269 165.456 123.08 209.056 115.333C303.345 98.5795 516.381 66.28 608.167 51.9444C712.275 35.6843 817.281 20.6694 921 2"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY   SCROLL SVG */}
            <motion.svg
              inital={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 0.5, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTIANER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSKillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ x: "-300px" }}
              animate={isSKillRefInView ? { x: 0 } : {}}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              inital={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 0.5, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST  */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-around h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment, Way better than the position before!
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AsiaInfo
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment, Way better than the position before!
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AsiaInfo
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment, Way better than the position before!
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AsiaInfo
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
