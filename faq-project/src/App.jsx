/* eslint-disable react/no-unescaped-entities */

import './App.css'
import { GiStarShuriken } from "react-icons/gi";
import { SlMinus } from "react-icons/sl";
import { FaCirclePlus } from "react-icons/fa6";

function App() {
 
  return (
    <>
    <section className='flex  justify-center '>
      <div className='faqqing rounded-2xl bg-white p-4  '>
      <h1  className="text-3xl text-purple-600 font-bold flex gap-3 m-3"><GiStarShuriken /> FAQS</h1>

<section>
  <h3 className='mb-4 font-extrabold text-base flex justify-end gap-5  m-4'>What is Frontend Mentor, and how will it help me?<button><SlMinus className='text-2xl text-white border-none rounded-xl bg-gray-950'  /></button> </h3>

<h4 className='text-sm m-3 hidden'>Frontend Mentor offers realistic coding challenges to help developers improve their 
frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
all levels and ideal for portfolio building.
</h4>

<h2 className='mb-4 font-extrabold text-base flex justify-end gap-5  m-4'>Is Frontend Mentor free? <button>< FaCirclePlus className='text-2xl text-purple-800 border-none rounded-xl '  /></button></h2>

<h3 className='text-sm m-3 hidden'>Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
option providing access to a range of projects suitable for all skill levels.
</h3>
<h2  className='mb-4 font-extrabold text-base flex  justify-end gap-5  m-4'>Can I use Frontend Mentor projects in my portfolio?<button>< FaCirclePlus className='text-2xl text-purple-800 border-none rounded-xl '  /></button></h2>

<h3 className='text-sm m-3  hidden'>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
way to showcase your skills to potential employers!</h3>

<h2 className='mb-4 font-extrabold text-base flex justify-end gap-5  m-4'>How can I get help if I'm stuck on a Frontend Mentor challenge?<button>< FaCirclePlus className='text-2xl text-purple-800 border-none rounded-xl '  /></button></h2>

<h3 className='text-sm m-3  hidden'>The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members.
</h3>
</section>
      </div>

      </section>
       
  
    </>
  )
}

export default App
