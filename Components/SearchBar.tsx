"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SearchManufacturer from './SearchManufacturer'
const SearchBtn=({otherClasses}:{otherClasses:string})=>(
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt='magnifying glass' width={40} height={40} className='object-contain'/>
  </button>
)
const SearchBar = () => {
    const[manufacturare,setManufacturare]=useState("");
    const[model,setModel]=useState("");
    const router =useRouter()
    const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(manufacturare===""&& model===""){
        return;
      }
      updateSearchParams(manufacturare.toLowerCase(),model.toLowerCase())
    };
  const updateSearchParams=(manufacturare:string,model:string)=>{
    const searchParams=new URLSearchParams(window.location.search);
    if(model){
searchParams.set("model",model)
    }else{
      searchParams.delete("model",model)
    }
    if(manufacturare){
      searchParams.set("manufacturare",manufacturare)
          }else{
            searchParams.delete("manufacturare",manufacturare)
          }
const newPathname=`${window.location.pathname}?${searchParams.toString()}`
router.push(newPathname,{ scroll: false })
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
<div className='searchbar__item'>
<SearchManufacturer manufacturare={manufacturare} setManufacturare={setManufacturare}/>
<SearchBtn otherClasses='sm:hidden'/>
</div>
<div className='searchbar__item'>
<Image src="/model-icon.png" alt='model' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4'/>
<input type='text' name='model' value={model} onChange={(e)=>setModel(e.target.value)} placeholder='Tigun' className='searchbar__input'/>
<SearchBtn otherClasses='sm:hidden'/>
</div>
<SearchBtn otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar
