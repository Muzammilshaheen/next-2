import React from 'react'
import Image from "next/image";

const page = () => {
  return (
  
     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black pt-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image className="w-44 h-44 md:w-38 rounded-full mx-auto pt-0" src="/rehan.jpg" alt="" width="384" height="512" />       
      <ol className="list-inside list-decimal text-lg text-center sm:text-center bg-red-450">
          <li className="mb-2">
           <code className='text-red-400'> Muzammil shaheen</code>
            <code className="bg-green-400 px-1 py-1 rounded-full text-white ml-12">
              Muhammad Rehan
            </code>
            .
          </li>
          <li>
            <code className="bg-black px-1 py-1 rounded-full text-white">Aziz abad
              </code>
              <code className="bg-white px-1 py-1 rounded-full text-black-400 ml-24">Rahim yar khan</code>
              
              </li>
              
        </ol>
       

        <div className="flex gap-4 items-center flex-col sm:flex-row bg-white">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-400 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
           
          >
            <Image
              className="dark:invert"
              src="/001.jpg"
              alt=""
              width={20}
              height={20}
            />
            Aziz abad
          </a>
          <a
            className="ml-12 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-400 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
           
          >
            <Image
              className="dark:invert"
              src="/p.png"
              alt=""
              width={20}
              height={20}
            />
            03033105085
          </a>
   
                   
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-green-400">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          
          <Image
            aria-hidden
            src="/7.jpg"
            alt=""
            width={16}
            height={16}
          />
          adrees
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          
          <Image
            aria-hidden
            src="/2.jpg"
            alt=""
            width={16}
            height={16}
          />
          gmail
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          
          <Image
            aria-hidden
            src="/9.jfif"
            alt=""
            width={16}
            height={16}
          />
          aziz
        </a>

             </footer>
    </div>
  
)
}

export default page

