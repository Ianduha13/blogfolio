"use client"
import Spline from '@splinetool/react-spline';

export default function SplineScene({ url }: { url: string }) {
  return (
    <div className='h-full w-[45%]'>
      <Spline scene={url} />
    </div>
  );
}
