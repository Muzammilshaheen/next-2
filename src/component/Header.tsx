import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <div className="flex bg-green-400 p-3 gap-6 italic text-white text-start">
    <Link href="\" className="pl-3 pr-3 text-pink-700">home page</Link>
    <Link href="\about" className="pl-3 pr-3">About</Link>
    <Link href="\adress" className="pl-3 pr-3">Adress</Link>

    </div>
     )
    }
    export default Header