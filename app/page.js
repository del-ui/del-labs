"use client"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

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

<section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
{/* BACKGROUND GLOW EFFECTS */}

<div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 opacity-30 blur-3xl rounded-full"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>

<div className="absolute top-40 right-1/3 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
<motion.h1
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-6xl font-bold mb-6 leading-tight"
>

Build Smart <span className="text-blue-600">Digital Systems</span><br/>
for Modern Businesses

</motion.h1>

<p className="text-xl text-gray-400 max-w-2xl">

<p className="text-xl text-gray-400 max-w-2xl z-10">

DEL-LABS develops modern digital systems including
business automation platforms, AI solutions and
IoT technologies that help organizations operate smarter.

</p>

</p>

<div className="mt-10 flex gap-6">

<button className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700">

Explore Solutions

</button>

<button className="border border-gray-500 px-8 py-4 rounded-lg text-lg hover:border-white">

Start a Project

</button>

</div>

</section>
{/* SYSTEMS SECTION */}

<section className="py-24 px-10 bg-black">

<h2 className="text-4xl font-bold text-center mb-16">
Systems We Build
</h2>

<div className="grid md:grid-cols-4 gap-8">

{/* POS SYSTEM */}

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition"
>

<h3 className="text-xl font-bold mb-4">
POS Systems
</h3>

<p className="text-gray-400">
Retail and restaurant point-of-sale systems that manage sales,
inventory and reporting in real time.
</p>

</motion.div>


{/* MANAGEMENT SYSTEM */}
<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition"
>

<h3 className="text-xl font-bold mb-4">
Management Systems
</h3>

<p className="text-gray-400">
Custom systems for schools, hospitals and organizations
to automate operations and records.
</p>
</motion.div>


{/* AI SYSTEM */}

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition"
>

<h3 className="text-xl font-bold mb-4">
AI Systems
</h3>

<p className="text-gray-400">
Smart applications including facial recognition,
data analysis and intelligent automation.
</p>

</motion.div>


{/* IOT SYSTEM */}

<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition"
>

<h3 className="text-xl font-bold mb-4">
IoT Monitoring
</h3>

<p className="text-gray-400">
Sensor-powered monitoring systems for industries,
equipment and predictive maintenance.
</p>

</motion.div>
</div>

</section>
{/* PORTFOLIO SECTION */}

<section className="py-24 px-10 bg-gray-950">

<h2 className="text-4xl font-bold text-center mb-16">
Projects & Innovations
</h2>

<div className="grid md:grid-cols-3 gap-10">

{/* PROJECT 1 */}

<motion.div
whileHover={{ scale: 1.07 }}
className="bg-black rounded-xl overflow-hidden transition"
>

<img 
src="/projects/pos.jpg" 
alt="POS System"
className="w-full h-52 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
POS Management System
</h3>

<p className="text-gray-400">
A complete retail system for managing sales, inventory,
and financial reports.
</p>

</div>

</motion.div>


{/* PROJECT 2 */}

<motion.div
whileHover={{ scale: 1.07 }}
className="bg-black rounded-xl overflow-hidden transition"
>

<img 
src="/projects/facials.png" 
alt="Facial Recognition System"
className="w-full h-52 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
Facial Recognition System
</h3>

<p className="text-gray-400">
AI-powered identity recognition system for access control
and smart monitoring.
</p>

</div>

</motion.div>


{/* PROJECT 3 */}

<motion.div
whileHover={{ scale: 1.07 }}
className="bg-black rounded-xl overflow-hidden transition">

<img 
src="/projects/iot.png" 
alt="IoT Monitoring System"
className="w-full h-52 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
IoT Monitoring Dashboard
</h3>

<p className="text-gray-400">
Real-time monitoring system for industrial devices
and predictive maintenance.
</p>

</div>

</motion.div>

</div>

</section>
{/* ABOUT SECTION */}

<section className="py-24 px-10 bg-black">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl font-bold mb-6">
About DEL-LABS
</h2>

<p className="text-gray-400 mb-6">
DEL-LABS is a technology innovation company focused on building
smart digital systems for businesses and institutions.
</p>

<p className="text-gray-400 mb-6">
We specialize in software development, artificial intelligence,
automation systems and IoT technologies that help organizations
operate more efficiently.
</p>

<p className="text-gray-400">
Our mission is to transform manual and outdated processes
into intelligent digital solutions.
</p>

</div>

<div>

<img
src="/projects/thursday.png"
className="rounded-xl shadow-lg"
/>

</div>

</div>

</section>
{/* CONTACT SECTION */}

<section className="py-24 px-10 bg-gray-950">

<h2 className="text-4xl font-bold text-center mb-16">
Start a Project with DEL-LABS
</h2>

<div className="max-w-3xl mx-auto">

<form className="flex flex-col gap-6">

<input
type="text"
placeholder="Your Name"
className="p-4 rounded-lg bg-black border border-gray-800 text-white"
/>

<input
type="email"
placeholder="Your Email"
className="p-4 rounded-lg bg-black border border-gray-800 text-white"
/>

<input
type="text"
placeholder="Company / Organization"
className="p-4 rounded-lg bg-black border border-gray-800 text-white"
/>

<textarea
placeholder="Tell us about the system or project you need..."
rows="5"
className="p-4 rounded-lg bg-black border border-gray-800 text-white"
/>

<button
className="bg-blue-600 p-4 rounded-lg hover:bg-blue-700 text-lg"
>
Send Request
</button>

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
    </motion.main>
  );
}