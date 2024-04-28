"use client"
import Spline from '@splinetool/react-spline';

export default function SplineScene({ url }: { url: string }) {
  return (
    <div className='h-[500px] w-full'>
      <Spline scene={url} className='object-contain' />
    </div>
  );
}
