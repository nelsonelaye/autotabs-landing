"use client";

import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary mx-auto max-w-7xl rounded-3xl text-white mb-6">
      <div
        className={`mx-auto max-w-7xl px-6 pt-16 lg:px-8 transition-all duration-800 `}
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
        <div className="flex items-center justify-center gap-8 hidden">
          {/* Logo and brand */}
          {/* <div className="md:col-span-1"> */}
          {/* <Image src="/logo.png" alt="Autotabs logo" width={64} height={64} /> */}
          {/* <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold">A</span>
              </div>
            </div> */}
          {/* </div> */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="block text-white/80 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#howitworks"
              className="block text-white/80 hover:text-white transition-colors"
            >
              How it works
            </a>
          </nav>

          {/* Quick Links */}
          {/* <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-white/80 hover:text-white transition-colors"
              >
                About
              </a>

              <a
                href="#howitworks"
                className="block text-white/80 hover:text-white transition-colors"
              >
                How it works
              </a>
         
            </nav>
          </div> */}

          {/* Contact */}
          {/* <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-white/80">
              <p>support@autotabs.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, USA</p>
            </div>
          </div> */}

          {/* Follow us */}
          {/* <div>
            <h3 className="font-semibold text-white mb-4">Follow us</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <FiTwitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <FiFacebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </div>
          </div> */}
        </div>

        <div className="mt-16 pt-4 md:pt-8 border-t border-white/20 mb-0">
          <div className="text-[70px] md:text-[250px] font-bold text-center text-white mb-0">
            Autotabs
          </div>
        </div>
      </div>
    </footer>
  );
}
