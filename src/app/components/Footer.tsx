import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary font-roboto-mono text-[#E3BECE] justify-center items-center flex flex-col py-4 space-y-4 ">
      <div className="flex gap-8 text-sm">
        <Link href="#">Cookies</Link>
        <Link href="#">Terms and Conditions</Link>
        <Link href="#">GDPR</Link>
      </div>
      <div className="text-sm">
        <p>Copyright 2025 - Kroupa Daniel</p>
      </div>
    </footer>
  );
};

export default Footer;
