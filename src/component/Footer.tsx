import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="flex bg-green-400 p-3 gap-6 italic text-red-400 text-start justify-center">
    <Link href="#" className="pl-3 pr-3 text-pink-700">Gmail</Link>
    <Link href="\about" className="pl-3 pr-3">whatsapp</Link>
    <Link href="\adress" className="pl-3 pr-3">Adress</Link>

    </div>
     )
    }
    export default Footer