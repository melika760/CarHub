"use client"
import React,{Fragment, useState} from 'react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constant';
import { Combobox,ComboboxButton,ComboboxInput,ComboboxOption,ComboboxOptions,Transition } from '@headlessui/react';
const SearchManufacturer = ({manufacturare,setManufacturare}:SearchManufacturerProps) => {
    const[query,setQuery]=useState("");
    const filteredMnufacturers=
    query === ""? manufacturers :manufacturers.filter((item)=>(item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))))
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturare} onChange={setManufacturare}>
        <div className='realative w-full'>
            <ComboboxButton className="absolute top-[14px]">
            <Image 
            src="/car-logo.svg"
            alt='CarLogo'
            width={20}
            height={20}
            className='ml-4'
            />
            </ComboboxButton>
            <ComboboxInput className="search-manufacturer__input" placeholder='Volkswagen' displayValue={(manufacturare:string)=>manufacturare} onChange={(e)=>setQuery(e.target.value)} />
            <Transition as={Fragment} leave='transition ease-in duration-100'leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={()=>setQuery("")}>
<ComboboxOptions className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden">
  {filteredMnufacturers.map((item)=>(
<ComboboxOption value={item} key={item} className="relative search-manufacturer__option  cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-primary-blue text-gray-900">
    {item}</ComboboxOption>
  ))}
</ComboboxOptions>
        </Transition>
        </div>

      </Combobox>
    </div>
  )
}

export default SearchManufacturer
