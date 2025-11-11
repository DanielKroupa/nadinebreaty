"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const AboutMe = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div ref={ref} className="lg:px-20 pb-8 2xl:px-40 md:px-8 bg-[#eedfe1] ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-secondary font-semibold text-center py-12 md:scroll-mt-28 scroll-mt-14 "
        id="aboutme"
      >
        About me
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="md:flex block gap-16 md:px-0 px-4 font-roboto-mono max-w-6xl "
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/img/nadine2.png"
            alt="nadine"
            width={1000}
            height={589}
            className="object-contain max-w-full"
          />
        </motion.div>
        <div className="flex flex-col text-secondary text-xl">
          <motion.p variants={fadeInUp} className="py-6">
            My name is <b>Nadine</b>. I&apos;m from Rostock, Germany — most
            people know me from <b>TikTok</b> or <b>YouTube</b>.
          </motion.p>
          <motion.p variants={fadeInUp} className="py-6">
            I was born with piebaldism that affects skin pigmentation. For a
            long time, it made me feel different in a way that scared me. Now,
            it&apos;s part of what taught me how to accept who I am.
          </motion.p>
          <motion.p variants={fadeInUp} className="py-6">
            I share my life as it really is — imperfect, messy, sometimes loud,
            sometimes quiet. I talk openly about mental health and the ups and
            downs that come with it.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Because being &quot;okay&quot; doesn&apos;t mean being perfect.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
