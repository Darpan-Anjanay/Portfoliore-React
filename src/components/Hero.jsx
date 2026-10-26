import ProfileImg from "../assets/Profile.jpeg";
import Resume from "../assets/DarpanAnjanay-Python_Developer-2026.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaPhone,
 
} from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

function Hero() {
  return (
    <header className="relative flex min-h-[85vh] items-center bg-[#080b12] py-16">

      <div className="mx-auto w-[90%] max-w-[1100px]">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">

          {/* LEFT */}
          <div className="max-w-3xl">

            <span className="mb-5 inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-blue-400">
              Python Developer
            </span>

            <h1 className="mb-3 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              Darpan{" "}
              <span className="text-blue-400">
                Anjanay
              </span>
            </h1>

            <h2 className="mb-6 text-4xl font-semibold text-slate-300">
              Python Developer
            </h2>

            {/* Contact */}
            <div className="mb-6 flex flex-wrap gap-5 text-sm text-slate-400 ">

              <a
                href="mailto:darpangurjar28@gmail.com"
                className=" text-2xl flex items-center gap-2 hover:text-blue-400"
              >
                <FaEnvelope />
                darpangurjar28@gmail.com
              </a>

              <a
                href="tel:+919644580860"
                className="text-2xl flex items-center gap-2 hover:text-blue-400"
              >
                <CiMobile3 />
                +91 96445 80860
              </a>

            </div>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-400">
              I’m a Python Developer specializing in building scalable SaaS
              and ERP applications with Python, Django, DRF, FastAPI, and
              React. I enjoy designing systems that are not only functional
              but also secure, modular, and ready to scale.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">

              {/* Resume */}
              <a
                href={Resume}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <FaDownload />
                Resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                <FaGithub />
                GitHub
              </a>

            </div>
          </div>
         
          {/* PROFILE IMAGE */}
          <div className="shrink-0">

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-blue-500/10">

              <img
                src={ProfileImg}
                alt="Darpan Anjanay"
                className="h-64 w-64 rounded-xl object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Hero;