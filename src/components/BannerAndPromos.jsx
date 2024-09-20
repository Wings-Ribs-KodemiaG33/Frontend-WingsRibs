import React from 'react';
import BannerPromo from './BannerPromos';
import CarouselPromociones from './CarouselPromociones';

export default function BannerYPromos() {
  return (
    <div className="w-full">
      <BannerPromo />
      <div className="rounded-t-lg bg-neutral-900 p-4 mt-8 mb-4">
        <h3 className="text-2xl font-bold text-amber-500">Promociones</h3>
      </div>
      <CarouselPromociones />
    </div>
  );
}
