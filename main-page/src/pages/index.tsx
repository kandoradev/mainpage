import { type NextPage } from "next";
import Head from "next/head";
import router from 'next/router'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kandora's Portfolio</title>
        <meta name="kandora's portfolio website" content="built with by t3 stack" />
        <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA4P7/AMPp9wBSY6UATpbeAJHP6wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwADMAAAAANEMzRDAAAAA1REREMAAAADVVJVQwAAAANVVVJDAAAANVVVIiQwAANVVVVSVEMAA1ERVVVVQwAAMzEVVTMwAAAAAxVTAAAAAAADFVMAAAAAAAA1MAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA+c8AAPAHAADwBwAA8AcAAPAHAADgAwAAwAEAAMABAADgAwAA/B8AAPwfAAD+PwAA/38AAP//AAD//wAA" rel="icon" type="image/x-icon" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b background-animate from-[#12cdae] to-[#15162c]">
      <img 
      className="mb-20 h-20 w-20" 
      src="/star.svg"
      alt="profilepic" 
      />
        <h1 className="text-white font-lato font-black text-5xl">Hello there! I'm Kandora </h1>
        <p className="text-white font-black text-2xl mt-4 font-lato">full stack developer, based in the Dominican Republic.</p>
        <h1 className="text-white font-sono font-black mt-12 text-3xl">- Projects -</h1>
        <div className=" text-white flex flex-row items-center justify-center gap-5 p-5 font-lato font-black">
        <button className="underline p-2 font-sono">supplyEyes</button>
        <button className="underline rounded-lg p-2 font-sono">restaurant-E</button>
        </div>
        <h1 className="text-white font-sono font-black mt-12 text-3xl">- Open Source Contributions -</h1>
        <div className=" text-white flex flex-row items-center justify-center gap-5 p-5 font-lato font-black">
        <button type="button" onClick={() => router.push('https://github.com/reactjs/reactjs.org/issues/5593')} className="underline p-2 font-sono">React, issue #5593</button>
        <button className="underline rounded-lg p-2 font-sono">Bun</button> // this is an example 
        <button className="underline p-2 font-sono">Vercel</button> // this is an example 
        </div>
        <div className=" text-white flex flex-row items-center justify-center gap-5 p-5 mt-10 font-lato font-black text-1xl">
        <button type="button" onClick={() => router.push('mailto:kandoradev@gmail.com')} className="outline rounded-lg p-2">kandoradev@gmail.com</button>
        <button type="button" onClick={() => router.push('https://github.com/kandoradev')} className="outline rounded-lg p-2">github</button>
        <button type="button" onClick={() => router.push('https://www.linkedin.com/in/kandoradev')} className="outline rounded-lg p-2">linkedin</button>
        <button type="button" onClick={() => router.push('https://twitter.com/kandoradev')} className="outline rounded-lg p-2">twitter</button>
        <button type="button" onClick={() => router.push('https://drive.google.com/file/d/1ryesiZCw3wbUGYpUUivC8e5ZFL6_UIcp/view?usp=share_link')} className="outline rounded-lg p-2">resume</button>
        </div>
        <box className="bg-white rounded-full mt-20 p-3 animate-pulse">
        <p className="text-sky-900 font-light text-sm font-lato">I am authorized to work in the U.S</p>
        </box>
      </main>
    </>
  );
};

export default Home;
