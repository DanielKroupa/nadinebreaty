"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      // use a cubic-bezier easing array to satisfy the Easing type
      ease: [0.33, 1, 0.68, 1],
      delay: custom,
    },
  }),
};

const Main = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bg-linear-180 from-primary/20 via-[#530A29]/15 to-primary/0 lg:px-20 md:px-8 md:p-8 p-4"
      >
        <div className="md:flex block md:items-center justify-center gap-16 xl:px-32 xl:py-16 lg:px-16 lg:py-8">
          {/* Profilový obrázek */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="rounded-full md:mx-px mx-auto md:size-auto size-64 border-2 border-primary/20 bg-radial-[at_50%_50%] from-primary/0 to-primary/20 shadow-lg shadow-primary/20"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
            >
              <Image
                src="/img/nadine.png"
                alt="Nadine"
                height={300}
                width={300}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Textová část */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-col justify-between py-8 space-y-8"
          >
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="p-1 text-primary space-y-4"
            >
              <h2 className="md:text-5xl font-bold font-dancing flex items-center gap-4 md:text-left text-center text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hello, I&apos;m Nadine
                </motion.span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
                >
                  <Image
                    src="/icons/heart.png"
                    width={26}
                    height={22}
                    alt="heart"
                    className="object-contain md:block hidden"
                  />
                </motion.div>
              </h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl font-dancing"
              >
                - a girl who talks about mental health and difference.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center md:justify-start"
            >
              <Link
                href="#"
                className="rounded-full text-primary border-2 border-primary font-semibold bg-primary/10 font-roboto-mono px-8 py-4 md:text-xl text-lg shadow-md shadow-primary/25 hover:scale-105 transition-transform"
              >
                Let&apos;s work together
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Sociální odkazy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="md:flex block flex-col items-center md:py-16 py-8"
        >
          <div className="pb-8 text-primary">
            <p className="font-roboto-mono text-xl md:text-left text-center">
              Also follow me on
            </p>
          </div>
          <div className="md:flex space-y-4 md:space-y-0 block md:flex-row font-poppins gap-12 text-primary font-medium">
            {[
              {
                Icon: FaTiktok,
                label: "11.1 M",
                link: "https://www.tiktok.com/@nadinebreaty",
              },
              {
                Icon: FaSnapchatGhost,
                label: "11 M",
                link: "https://www.snapchat.com/t/NbyjfAzx",
              },
              {
                Icon: FaYoutube,
                label: "5.8 M",
                link: "https://www.youtube.com/@nadinebreaty",
              },
              {
                Icon: FaInstagram,
                label: "1.1 M",
                link: "https://www.instagram.com/nadinebreaty/",
              },
            ].map(({ Icon, label, link }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
              >
                <Link
                  href={link}
                  target="_blank"
                  className="flex transition-colors items-center gap-4 justify-center rounded-full group border-2 hover:bg-primary hover:fill-white hover:text-white border-primary px-8 py-4 hover:shadow-md hover:shadow-primary/25"
                >
                  <Icon size={35} />
                  <p>{label}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Dekorativní vektor */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
        className="absolute -z-10 2xl:top-[51em] lg:top-[51em] md:top-[47em] sm:top-[47em]"
      >
        <Image
          src="/icons/vector.svg"
          alt="vector"
          width={4096}
          height={0}
          className="cursor-not-allowed pointer-events-none w-[4096px]"
        />
      </motion.div>
    </>
  );
};

export default Main;
