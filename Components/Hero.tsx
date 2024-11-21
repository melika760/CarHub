"use client"
import Customebtn from "./Customebtn";
import Image from "next/image";
const Hero =()=>{
const handlesScroll=()=>{

}
    return(<div className="hero">
        <div className="flex-1 pt-36 padding-x">
<h1 className="hero__title">
Find , book , rent a car , quickly and easily!
</h1>
<p className="hero__subtitle">Streamline your car rental experience with our effortless booking process</p>
<Customebtn title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handlesScroll}/>
        </div>
<div className="hero__image-container">
    <div className="hero__image">
<Image src="/hero.png" alt="hero" fill className="object-contain"/>
    </div>
    
<div className="hero__image-overlay"/>
</div>
    </div>)
}
export default Hero;