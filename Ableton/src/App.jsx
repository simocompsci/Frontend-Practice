import React, { useRef, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import bgImage from './assets/pexels-tommyclopez-765139.jpg'
import stImage from './assets/newImage.jpg'
import ndImage from './assets/pexels-myatezhny39-2121659.jpg'
import board from './assets/pexels-thirdman-5257580.jpg'
import AbletonImg from './assets/pexels-dmitry-rodionov-20107151.jpg'
import studio from './assets/pexels-pixabay-164938.jpg'
import radio from './assets/pexels-baris-kilinc-124682051-10139840.jpg'
import reunion1 from './assets/pexels-cottonbro-7437100.jpg'
import reunion2 from './assets/pexels-moe-magners-7495111.jpg'
import guitar from './assets/pexels-pixabay-210854.jpg'

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

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

        <div className="mx-auto w-200 h-50 mt-20 ">
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

        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
          <div className="relative w-[700px] h-[450px]">
            <video
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster={stImage}
              muted
              loop
              controls={isPlaying}
              className="w-full h-full rounded-xl object-cover aspect-video"
            />

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  className="w-20 h-20 text-white"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle cx="42" cy="42" r="40" stroke="blue" strokeWidth="5" fill="blue" />
                  <polygon points="34,26 60,42 34,58" fill="white" />
                </svg>
              </button>
            )}
          </div>
          <p className="font-serif text-xl mt-5">Why Ableton - Juanpe Bolivar </p>
        </div>

        <div className="mx-auto w-200 h-50 ">
          <p className="font-serif text-3xl font-semibold">
            We are more than 350 people from 30 different countries
            divided between our headquarters in Berlin and our offices
            in Los Angeles and Tokyo.
          </p>
          <p className="font-serif text-2xl mt-3 font-normal">
            Most of us are active musicians, producers, and DJs,
            and many of us use Live and Push every day.
            We come from a wide range of cultural and professional backgrounds.
            Some of us have PhDs, some are self-taught, and most of us are somewhere in between.
            What connects us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music culture.
          </p>
        </div>

        <div className="flex flex-row items-center relative mt-50">
          {/* Yellow container */}
          <div className="bg-emerald-200/60 w-200 h-180 flex flex-col justify-center items-center z-10 gap-10 mb-15 rounded-r-2xl">
            <div className=" w-120 h-90 text-white flex items-center justify-center mt-15 rounded-2xl" style={{
              backgroundImage: `url(${board})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            </div>
            <div className=" w-120 h-90 text-white flex items-center justify-center rounded-2xl mb-15" style={{
              backgroundImage: `url(${AbletonImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            </div>
          </div>

          {/* Gray box that overlaps the yellow one */}
          <div className=" w-130 h-140 -ml-16 z-20 relative mb-15 rounded-2xl" style={{
            backgroundImage: `url(${studio})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            {/* Content here */}
          </div>
        </div>

        <div className="mx-auto w-200 h-50 ">
          <p className="font-serif text-3xl font-semibold">
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </p>
          <p className="font-serif text-2xl mt-3 font-normal">
            Rather than having a one-size-fits-all process, we try to give our people
            what they need to work their magic and grow. We’ve learned that achieving
            the best results comes from building teams that are richly diverse,
            and thus able to explore problems from a wider set of perspectives.
            We don’t always agree with each other, but opinion and debate are valued
            and openly encouraged.
          </p>
        </div>

        <div className="bg-cover mx-auto mt-35 rounded-xl bg-center h-150 w-250 mb-10" style={{ backgroundImage: `url(${radio})` }}>
        </div>

        <div className="mx-auto w-200 h-50">
          <p className="font-serif text-3xl font-semibold">
            We’re passionate about what we do, but we’re equally passionate about improving who we are.
          </p>
          <p className="font-serif text-2xl mt-3 font-normal">
            We work hard to foster an environment where people can grow both personally
            and professionally, and we strive to create a wealth of opportunities to learn
            from and with each other. <br />

            Alongside an internal training program, employees are actively supported in acquiring
            new knowledge and skills, and coached on applying these in their daily work.
            In addition, staff-organized development and music salons are a chance to discuss
            new technologies, production techniques and best practices.
          </p>
        </div>

        <div className="relative bg-pink-200 w-200 h-180 mx-auto gap-20 flex flex-row justify-between items-center z-10 mb-15 mt-50 rounded-2xl px-10">
          <div className="w-150 h-100 -ml-30 mb-15 rounded-2xl" style={{
            backgroundImage: `url(${reunion1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            {/* Content here */}
          </div>
          <div className="w-200 h-140 -mr-30 mb-15 rounded-2xl" style={{
            backgroundImage: `url(${reunion2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            {/* Content here */}
          </div>
        </div>

        <div className="mx-auto w-200 h-50">
          <p className="font-serif text-3xl font-semibold">
            We want our employees to love it here. Since we’re looking for
            exceptional talent from around the world, we will do everything
            we can to make your transition as easy as possible.
          </p>
          <p className="font-serif text-2xl mt-3 font-normal">
            If you're joining us in Berlin, we'll help with relocation and paperwork.
            We’ll even provide you with free German or English lessons. Plus, working
            in Germany means you can expect comprehensive health insurance for you and your family,
            as well as generous maternity and paternity leave. Office hours are flexible,
            but it’s not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group activities.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center h-120 w-280  mx-auto mt-45 mb-15 ">
          <div className="w-full h-full" style={{
            backgroundImage: `url(${guitar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
          }}></div>
          <div className="bg-emerald-100 w-full h-full">
            <div className="flex flex-col justify-center my-30 mx-23">
              <p className="font-sans text-3xl mt-3 font-medium">
                We’re really proud of the work we’ve done so far.
                But there’s so much more to come.
                If you’d like to be a part of it, please join us.
              </p>
              <a href="" className="font-sans text-3xl mt-7 font-semibold text-blue-600">
                <button>See Latest Jobs <span className="font-bold text-3xl text-blue-600">+</span></button>
              </a>
            </div>
          </div>

        </div>

        <Footer/>

      </div>
    </>
  )
}

export default App
