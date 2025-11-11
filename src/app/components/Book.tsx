"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

import { GoArrowRight, GoStarFill } from "react-icons/go";

const Book = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="md:px-8 pb-4 px-4 lg:px-20 2xl:px-40 bg-terciary/15 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-secondary font-semibold text-center py-12 md:scroll-mt-28 scroll-mt-14"
        id="book"
      >
        Book
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex md:flex-row flex-col pb-8 font-roboto-mono gap-16"
      >
        <motion.div variants={fadeInUp} className="">
          <Image
            src="/img/book.png"
            alt=""
            width={375}
            height={500}
            className="md:h-lg"
          />
        </motion.div>
        <motion.div variants={fadeInUp} className="mb-8 md:mb-0">
          <div className="md:flex md:space-y-0 space-y-4 flex-row h-fit w-fit justify-center items-center gap-4 md:pb-2 pb-4 ">
            <h3 className="text-secondary text-3xl font-semibold">
              Only Kind of broken
            </h3>
            <span className="bg-[#FF5E5D] py-1 px-3 w-fit rounded-lg text-base text-white pointer-events-none font-poppins shadow-lg shadow-[#FF5E5D]/25 ">
              Save -40%
            </span>
          </div>
          <div className="text-secondary xl:max-w-max 2xl:max-w-3/4 font-normal ">
            <div className="w-full pb-8">
              <span className="flex gap-2 items-center">
                {[...Array(5)].map((_, star) => (
                  <GoStarFill
                    key={star}
                    size={24}
                    color="#FFDF20"
                    className="drop-shadow-[0px_3px_2px_rgba(163,143,21,0.35)] "
                  />
                ))}
                <p className="font-medium">(236)</p>
              </span>
            </div>
            <p className="text-lg pb-8">
              I wrote <b>Only Kind of Broken</b> as part of my own journey
              toward self-acceptance.
            </p>
            <p className="text-lg pb-8">
              It’s a personal and open look at how it feels to live with
              fragility and still find strength.
            </p>
            <p className="text-lg pb-8">
              If you want to read about what self-acceptance really looks like —
              <span className="font-semibold"> raw and unfiltered </span> — this
              book is for
              <span className="font-semibold"> You.</span>
            </p>
            <p className="text-lg pb-4 font-medium">Variants of the book</p>
            <div className="flex gap-8 pb-8">
              <span className="border-2 border-secondary rounded-lg px-4 py-2 bg-secondary/10 ">
                <p className="font-medium">Kindle edition</p>
                <p className="font-bold">11,99 EUR</p>
              </span>
              <span className="border-2 border-secondary rounded-lg px-4 py-2 bg-secondary/10 ">
                <p className="font-medium">Perfect Paperback</p>
                <p className="font-bold">14,99 EUR</p>
              </span>
            </div>
            <div className="h-auto ">
              <Link
                href="https://www.amazon.de/Only-Kind-Broken-Mutmachbuch-Seiten/dp/396096952X"
                className="max-w-[420px] gap-2 items-center self-end justify-center flex bg-primary shadow-primary/25 shadow-lg text-white px-4 py-2.5 rounded-lg group "
              >
                Buy on Amazon
                <GoArrowRight
                  size={22}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Book;
