
import { MouseEventHandler } from "react";
export interface CustomebtnProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"|"submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}
export interface SearchManufacturerProps{
    manufacturare:string,
    setManufacturare:(manufacturare:string)=>void;
}
export interface CarProps{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}
// export interface CarProps{
//     id:string;
//     created:string;
//     modified:string;
//     trim:string;
//     num_doors:string;
//     year: string;
//     drivetype_desc:string;
//     make_name:string;
//     model_name:string;
//     drivetrain:string;
//     bodytype:string;
//     }
    

export interface FilterProps{
    model:string;
    fuel:string;
    year:number;
    limit:number;
    manufacturare:string;
}