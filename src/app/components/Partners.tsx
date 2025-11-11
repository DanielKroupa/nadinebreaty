"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const Partners = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-roboto-mono text-primary text-center font-bold"
      >
        Partners a collabs
      </motion.h3>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="
          flex items-center md:gap-0 gap-8 py-8 md:px-0 lg:px-4 xl:px-8
          overflow-x-auto scrollbar-hide md:justify-between justify-start
        "
      >
        <motion.div variants={scaleIn} className="shrink-0">
          <Image
            src="/img/partners/schwarzkopf.png"
            alt="schwarzkopf"
            className="w-32"
            height={100}
            width={100}
          />
        </motion.div>
        <motion.div variants={scaleIn} className="shrink-0">
          <Image
            src="/img/partners/spotify.png"
            alt="spotify"
            className="w-32"
            height={150}
            width={176}
          />
        </motion.div>
        <motion.div variants={scaleIn} className="shrink-0">
          <Image
            src="/img/partners/wecreate.png"
            alt="wecreate"
            className="w-32"
            height={125}
            width={300}
          />
        </motion.div>
        <motion.div variants={scaleIn} className="shrink-0">
          <Image
            src="/img/partners/gilette.png"
            alt="gilette"
            className="w-32"
            height={125}
            width={178}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partners;
