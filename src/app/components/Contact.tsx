"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Partners from "./Partners";

const Contact = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div ref={ref} className="md:px-8 lg:px-20 xl:px-40 px-4 bg-[#A50036]/25 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-secondary font-semibold text-center py-12 md:scroll-mt-28 scroll-mt-0"
        id="contact"
      >
        Contact
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="md:flex block font-roboto-mono text-secondary pb-2"
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/img/nadine3.png"
            alt="nadine"
            width={449}
            height={547}
            className=""
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex space-y-4 flex-col max-w-[766px] text-lg"
        >
          <p>Want to collaborate, talk, or create something meaningful?</p>
          <p className="font-medium">Let&apos;s start the conversation.</p>
          <div className="flex flex-row items-center gap-4">
            <div className="size-12 flex items-center rounded-full justify-center bg-primary shadow-md shadow-secondary/25">
              <Image
                src="/icons/mail.svg"
                alt="mail"
                width={24}
                height={18}
                className=""
              />
            </div>
            <Link
              href="mailto:nadine@wecreate.media"
              className="hover:underline hover:font-medium"
            >
              nadine@wecreate.media
            </Link>
          </div>
          <div className="md:self-end self-center py-16">
            <p className="pb-4 text-center">Let&apos;s follow me on</p>
            <div className="flex gap-8 justify-around">
              <Link
                href=""
                className="size-12 flex items-center rounded-full justify-center bg-primary shadow-md shadow-secondary/25 "
              >
                <FaTiktok size={24} className="fill-white" />
              </Link>
              <Link
                href=""
                className="size-12 flex items-center rounded-full justify-center bg-primary shadow-md shadow-secondary/25   "
              >
                <FaYoutube size={24} className="fill-white" />
              </Link>
              <Link
                href=""
                className="size-12 flex items-center rounded-full justify-center bg-primary shadow-md shadow-secondary/25"
              >
                <FaSnapchatGhost size={24} className="fill-white" />
              </Link>
              <Link
                href=""
                className="size-12 flex items-center rounded-full justify-center bg-primary shadow-md shadow-secondary/25"
              >
                <FaInstagram size={24} className="fill-white" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Partners />
    </div>
  );
};

export default Contact;
