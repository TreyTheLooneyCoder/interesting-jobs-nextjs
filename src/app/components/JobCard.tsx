import React from 'react'


type CardProps = {
  title: string;
  row: number;
  col: number;
  why: string;
  skills: string;
  goals: string;
};

export default function Card({ title, why, skills, goals }: CardProps) {
  return (
    <div className='bg-indigo-900 h-[35rem] w-[75%] px-5 my-5 mx-[13%] '>
      <p className='text-white text-xl py-2 '>{title}</p>

      <p className='text-white text-md px-5 pt-1 indent-10'>{why}</p>
      <p className='text-white text-md px-5 pt-4 indent-10'>{skills}</p>
      <p className='text-white text-md px-5 pt-4 indent-10'>{goals}</p>

      
    </div>
  );
}