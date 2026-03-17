"use client"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { FaRobot, FaCloud, FaMicrochip, FaDatabase, FaLock } from "react-icons/fa"
import CountUp from "react-countup"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white"
    >
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        <div className="tech-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

        {/* FLOATING TECH ICONS */}

        <motion.div
          animate={{ y: [0,-20,0] }}
          transition={{ duration:6, repeat:Infinity }}
          className="absolute top-24 left-24 text-blue-400 text-4xl opacity-70"
        >
          <FaRobot/>
        </motion.div>

        <motion.div
          animate={{ y:[0,20,0] }}
          transition={{ duration:7, repeat:Infinity }}
          className="absolute top-40 right-32 text-cyan-400 text-4xl opacity-70"
        >
          <FaCloud/>
        </motion.div>

        <motion.div
          animate={{ y:[0,-15,0] }}
          transition={{ duration:5, repeat:Infinity }}
          className="absolute bottom-32 left-40 text-purple-400 text-4xl opacity-70"
        >
          <FaMicrochip/>
        </motion.div>

        <motion.div
          animate={{ y:[0,25,0] }}
          transition={{ duration:8, repeat:Infinity }}
          className="absolute bottom-24 right-20 text-blue-500 text-4xl opacity-70"
        >
          <FaDatabase/>
        </motion.div>

        <motion.div
          animate={{ y:[0,-18,0] }}
          transition={{ duration:6, repeat:Infinity }}
          className="absolute top-60 left-1/2 text-cyan-300 text-4xl opacity-70"
        >
          <FaLock/>
        </motion.div>

        {/* HERO TEXT */}

        <motion.h1
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-6xl font-bold mb-6 leading-tight z-10"
        >
          Build Smart <span className="text-blue-600">Digital Systems</span><br/>
          for Modern Businesses
        </motion.h1>

        <p className="text-xl text-gray-400 max-w-2xl z-10">
          DEL-LABS develops modern digital systems including
          business automation platforms, AI solutions and
          IoT technologies that help organizations operate smarter.
        </p>

        <div className="mt-10 flex gap-6 z-10">

          <a
          href="#systems"
          className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
          >
          Explore Solutions
          </a>

          <a
          href="#contact"
          className="border border-gray-500 px-8 py-4 rounded-lg text-lg hover:border-white transition"
          >
          Start a Project
          </a>

        </div>

      </section>


{/* SYSTEMS SECTION */}

<section id="systems" className="py-24 px-10 bg-black">

<h2 className="text-4xl font-bold text-center mb-16">
Systems We Build
</h2>

<div className="grid md:grid-cols-4 gap-8">

<motion.div
whileHover={{ scale:1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition cursor-pointer"
onClick={()=>window.location.href="/projects/pos"}
>
<h3 className="text-xl font-bold mb-4">POS Systems</h3>
<p className="text-gray-400">
Retail and restaurant point-of-sale systems that manage sales,
inventory and reporting in real time.
</p>
</motion.div>


<motion.div
whileHover={{ scale:1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition cursor-pointer"
onClick={()=>window.location.href="/projects/school"}
>
<h3 className="text-xl font-bold mb-4">Management Systems</h3>
<p className="text-gray-400">
Custom systems for schools, hospitals and organizations
to automate operations and records.
</p>
</motion.div>


<motion.div
whileHover={{ scale:1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition cursor-pointer"
onClick={()=>window.location.href="/projects/facials"}
>
<h3 className="text-xl font-bold mb-4">AI Systems</h3>
<p className="text-gray-400">
Smart applications including facial recognition,
data analysis and intelligent automation.
</p>
</motion.div>


<motion.div
whileHover={{ scale:1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition cursor-pointer"
onClick={()=>window.location.href="/projects/iot"}
>
<h3 className="text-xl font-bold mb-4">IoT Monitoring</h3>
<p className="text-gray-400">
Sensor-powered monitoring systems for industries,
equipment and predictive maintenance.
</p>
</motion.div>

</div>

</section>


{/* TECH STACK */}

<section id="tech-stack" className="py-24 px-10 bg-gray-950">

<h2 className="text-4xl font-bold text-center mb-16">
Technology We Use
</h2>

<div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

<div className="bg-black p-8 rounded-xl hover:bg-gray-900 text-center transition">
<h3 className="text-xl font-bold mb-2">Frontend</h3>
<p className="text-gray-400">React, Next.js, TailwindCSS</p>
</div>

<div className="bg-black p-8 rounded-xl hover:bg-gray-900 text-center transition">
<h3 className="text-xl font-bold mb-2">Backend</h3>
<p className="text-gray-400">Python, Node.js, APIs</p>
</div>

<div className="bg-black p-8 rounded-xl hover:bg-gray-900 text-center transition">
<h3 className="text-xl font-bold mb-2">AI Systems</h3>
<p className="text-gray-400">Machine Learning, Computer Vision</p>
</div>

<div className="bg-black p-8 rounded-xl hover:bg-gray-900 text-center transition">
<h3 className="text-xl font-bold mb-2">Database</h3>
<p className="text-gray-400">PostgreSQL, Cloud Databases</p>
</div>

</div>

</section>


{/* PORTFOLIO */}

      <section id="projects" className="py-24 px-10 bg-black">

        <h2 className="text-4xl font-bold text-center mb-16">Projects & Innovations</h2>

        <div className="grid md:grid-cols-3 gap-10">

        <motion.div whileHover={{ scale:1.07 }} className="bg-gray-900 rounded-xl overflow-hidden transition cursor-pointer" 
        onClick={()=>window.location.href="/projects/pos"} >

        <img src="/projects/pos.jpg" className="w-full h-52 object-cover"/>

        <div className="p-6">
        <h3 className="text-xl font-bold mb-2">POS Management System</h3>
        <p className="text-gray-400">
        A complete retail system for managing sales,
        inventory and financial reports.
        </p>
        </div>

        </motion.div>


        <motion.div whileHover={{ scale:1.07 }} className="bg-gray-900 rounded-xl overflow-hidden transition cursor-pointer" 
        onClick={()=>window.location.href="https://face-match-pop.lovable.app"} >

        <img src="/projects/facials.png" className="w-full h-52 object-cover"/>

        <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Facial Recognition System</h3>
        <p className="text-gray-400">
        AI-powered identity recognition system for access control
        and smart monitoring.
        </p>
        </div>

        </motion.div>


        <motion.div whileHover={{ scale:1.07 }} className="bg-gray-900 rounded-xl overflow-hidden transition cursor-pointer" 
        onClick={()=>window.location.href="/projects/iot"} >

        <img src="/projects/iot.png" className="w-full h-52 object-cover"/>

        <div className="p-6">
        <h3 className="text-xl font-bold mb-2">IoT Monitoring Dashboard</h3>
        <p className="text-gray-400">
        Real-time monitoring system for industrial devices
        and predictive maintenance.
        </p>
        </div>

        </motion.div>

        </div>

      </section>

      {/* STATS / ACHIEVEMENTS */}
      <section id="stats" className="py-24 px-10 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div className="bg-black p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-5xl font-bold mb-2 text-blue-600"><CountUp end={50} duration={2} suffix="+" /></h3>
            <p className="text-gray-400">Systems Built</p>
          </div>
          <div className="bg-black p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-5xl font-bold mb-2 text-purple-600"><CountUp end={20} duration={2} suffix="+" /></h3>
            <p className="text-gray-400">Businesses Automated</p>
          </div>
          <div className="bg-black p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-5xl font-bold mb-2 text-cyan-400"><CountUp end={5} duration={2} /></h3>
            <p className="text-gray-400">AI Platforms</p>
          </div>
          <div className="bg-black p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-5xl font-bold mb-2 text-blue-500"><CountUp end={10000} duration={2} suffix="+" /></h3>
            <p className="text-gray-400">Users</p>
          </div>
        </div>
      </section>

{/* CONTACT */}

<section id="contact" className="py-24 px-10 bg-gray-950">

<h2 className="text-4xl font-bold text-center mb-16">
Start a Project with DEL-LABS
</h2>

<div className="max-w-3xl mx-auto">

<form className="flex flex-col gap-6">

<input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-black border border-gray-800"/>

<input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-black border border-gray-800"/>

<input type="text" placeholder="Company / Organization" className="p-4 rounded-lg bg-black border border-gray-800"/>

<textarea rows="5" placeholder="Tell us about the system you need..." className="p-4 rounded-lg bg-black border border-gray-800"></textarea>

<button className="bg-blue-600 p-4 rounded-lg hover:bg-blue-700 text-lg">Send Request</button>
</form>
</div>
</section>

{/* FOOTER */}

<footer className="bg-black border-t border-gray-800 py-10 text-center text-gray-400">

<h3 className="text-xl font-bold text-white mb-4">
DEL-LABS
</h3>

<p className="mb-4">
Smart Software • AI Solutions • IoT Innovation
</p>

<p>
© {new Date().getFullYear()} DEL-LABS. All rights reserved.
</p>
</footer>
</motion.main>)}