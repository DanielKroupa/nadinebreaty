"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const Content = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div ref={ref} className="md:px-8 px-4 lg:px-20 2xl:px-40 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-primary font-semibold text-center py-12 md:scroll-mt-28 scroll-mt-14"
        id="content"
      >
        Content
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="md:flex block font-roboto-mono flex-col justify-center items-center text-xl text-primary"
      >
        <motion.div variants={fadeInUp} className="space-y-8">
          <p className="">
            Videos are my way to speak out about things that often stay
            unspoken.
          </p>
          <p className="">
            On <span className="font-semibold">TikTok</span> and
            <span className="font-semibold"> YouTube</span>, I share personal
            stories, reflections, and lighter topics — fashion, beauty, and
            everyday life that keeps me grounded.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="md:flex block md:space-y-0 space-y-4 gap-8 flex-2 justify-center py-12"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col shadow-lg shadow-primary/25 w-fit"
          >
            <Image src="/img/content1.png" alt="" width={395} height={702} />
            <div className="text-center rounded-bl-lg rounded-br-lg bg-linear-90 from-primary via-[#530A2A] to-primary py-2">
              <p className="text-white text-xl">Schwarzkopf products</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col shadow-lg shadow-primary/25 w-fit"
          >
            <Image src="/img/content2.png" alt="" width={395} height={702} />
            <div className="text-center rounded-bl-lg rounded-br-lg bg-linear-90 from-primary via-[#530A2A] to-primary py-2">
              <p className="text-white text-xl">Modelling</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col shadow-lg shadow-primary/25 w-fit"
          >
            <Image src="/img/content3.png" alt="" width={395} height={702} />
            <div className="text-center rounded-bl-lg rounded-br-lg bg-linear-90 from-primary via-[#530A2A] to-primary py-2">
              <p className="text-white text-xl">Day of the influencer</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Content;
