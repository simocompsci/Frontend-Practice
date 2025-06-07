import React from "react"
import Header from "./components/Header"
import bgImage from './assets/pexels-tommyclopez-765139.jpg'
import stImage from './assets/newImage.jpg'
import ndImage from './assets/pexels-myatezhny39-2121659.jpg'

function App() {

  return (
    <>
      <div>
        <Header />
        <div>
          <div className="relative bg-cover mx-auto mt-20 rounded-xl bg-center h-150 w-250 text-red-400" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0  flex items-center justify-center">
              <h1 className="text-9xl font-bold font-mono">Ableton</h1>
            </div>
          </div>
          <div className="mx-auto w-200 h-50 mt-20 mb-15">
            <p className="font-serif text-3xl font-semibold">
              We make <span className="font-bold text-blue-700">Live</span>, <span className="font-bold text-blue-700">Push</span>,
              <span className="font-bold text-blue-700">Note</span>, <span className="font-bold text-blue-700">Move</span> and <span className="font-bold text-blue-700">Link</span> — unique software and hardware for music creation and performance.
              With these products, our community of users creates amazing things.
            </p>
            <p className="font-serif text-2xl mt-3 font-normal">
              Ableton was founded in 1999 and released the first version of Live in 2001.
              Our products are used by a community of dedicated musicians,
              sound designers, and artists from across the world.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center relative">
          {/* Yellow container */}
          <div className="bg-yellow-200 w-200 h-180 flex items-center justify-center z-10 mb-15 rounded-l-2xl">
            <div className=" w-120 h-100 text-white flex items-center justify-center rounded-2xl" style={{
              backgroundImage: `url(${stImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>

            </div>
          </div>

          {/* Gray box that overlaps the yellow one */}
          <div className=" w-130 h-140 -mr-16 z-20 relative mb-15 rounded-2xl" style={{
            backgroundImage: `url(${ndImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            {/* Content here */}
          </div>
        </div>

        <div className="mx-auto w-200 h-50 mt-20 mb-5">
          <p className="font-serif text-3xl font-semibold">
            Making music isn’t easy. It takes time, effort, and learning.
            But when you’re in the flow, it’s incredibly rewarding.
          </p>
          <p className="font-serif text-2xl mt-3 font-normal">
            We feel the same way about making Ableton products.
            The driving force behind Ableton is our passion for what we make,
            and the people we make it for.
          </p>
        </div>

        <div class="flex justify-center items-center min-h-screen bg-white">
          <video
            src="/videos/sample.mp4"
            controls
            autoPlay
            muted
            loop
            class="w-[700px] h-[450px] rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default App
