import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black pt-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image className="w-44 h-44 md:w-38 rounded-full mx-auto pt-0" src="/adress.png" alt="" width="384" height="512" />       
      <ol className="list-inside list-decimal text-lg text-center sm:text-center bg-red-450">
          <li className="mb-2">
           <code className='text-red-400'> Muzammil shaheen</code>
            <code className="bg-green-400 px-1 py-1 rounded-full text-white ml-12">
              aziz abad
            </code>
            .
          </li>
          <li>
            <code className="bg-black px-1 py-1 rounded-full text-white">03033105085
              </code>
              <code className="bg-white px-1 py-1 rounded-full text-black-400 ml-24">Rahim yar khan</code>
              
              </li>
              
        </ol>
        </main>
        </div>
  )
}
export default page