import Subsidiary from './Subsidiary';
import React from 'react';

export default function Footer() {
  return (
    <footer className=" w-full h-fit flex flex-col bg-neutral-800 justify-center px-[16px] md:px-[56px] lg:px-[80px] py-[24px] gap-[16px]">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <h1 id="ubuntu-bold" className="text-amber-500 text-[32px]">
          Wings & Ribs
        </h1>
        <img src="/images/W&R2.png" alt="logo" className="w-[125px] h-[80px]" />
      </div>
      <h2 id="ubuntu-bold" className="text-amber-600 text-[28px]">
        Contacto y sucursales
      </h2>
      <div>
        <Subsidiary />
      </div>
    </footer>
  );
}