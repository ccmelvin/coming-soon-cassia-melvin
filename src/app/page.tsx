"use client";
import Link from "next/link";
import { RiTiktokLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri";
import Image from "next/image";
// import {
//   Users,
//   ExternalLink,
//   BookOpen,
//   Star,
//   Mail,
//   ShoppingBag,
// } from "react-feather";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-200 text-teal-800 flex flex-col md:flex-row">
      {/* Left Section with Image, Name, Bio and Social Icons */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between ">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mt-8">
            Cassia Melvin
            <br />
            and Alex 🐶
          </h1>

          <div className="flex gap-6 mt-8">
            <Link
              href="https://www.instagram.com/cassiacmelvin/"
              className="hover:opacity-70 transition-opacity"
            >
              <RiInstagramLine size={28} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.pinterest.com/cassiamelvin/"
              className="hover:opacity-70 transition-opacity"
            >
              <RiPinterestLine size={28} />
              <span className="sr-only">Pinterest</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@cassiamelvin"
              className="hover:opacity-70 transition-opacity"
            >
              <RiTiktokLine size={28} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <p className="text-lg md:text-xl max-w-md mt-12 md:mt-0 ">
          Em breve, meu novo site estará no ar!
          <br />
          <br />
          Vou compartilhar como transformo receitas brasileiras com ingredientes
          americanos, recriando os sabores da nossa terra de um jeito único.
          <br />
          <br />
          Além disso, vou mostrar um pouco da minha vida em um lugar que poucos
          conhecem em uma cidade do interior dos Estados Unidos, o estado da Carolina do Norte (NC), as praias do
          Atlântico (como Outer Banks, famosa por seus faróis e dunas) até as
          montanhas dos Apalaches (como a região de Asheville, com florestas e
          cachoeiras).
        </p>
      </div>

      {/* Right Section with Hero Image and Links */}
      <div className="w-full md:w-1/1 relative">
        {/* Hero Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/cassiamelvin-alex.jpeg"
            alt="Cassia Melvin and Alex"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0"></div>
        </div>

        {/* Links */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-12">
          <div className="space-y-6 max-w-xs ml-auto text-white">
            {/* <Link
              href="/contact"
              className="flex items-center justify-between w-full p-3 border-b border-white/30 hover:border-white transition-colors group"
            >
              <span className="text-xl">Contato</span>
              <Mail
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                size={20}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </main>
  );
}
