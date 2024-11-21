import { CarProps,FilterProps } from "@/types";
export async function fetchcars(filters:FilterProps){
    const{manufacturare,model,fuel,year,limit}=filters;
    const headers={
		'X-RapidAPI-Key': 'fdbea6f56fmsh3fe550d44d49f10p165624jsn8d7052fb83cf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
const response= await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&model=${model}&make=${manufacturare}&year=${year}&fuel_type=${fuel}`
, { method:"GET",
    headers:headers
});
const result= await response.json();
return result;
}


export const generateCarUrl=(car:CarProps,angle?:string)=>{
const url=new URL("https://cdn.imagin.studio/getimage");
const {make,year,model}=car;
url.searchParams.append("customer","img");
url.searchParams.append("make",make);
url.searchParams.append("modelFamily", model.split(" ")[0]);
url.searchParams.append("zoomType","fullscreen");
url.searchParams.append("modelYear",`${year}`);
url.searchParams.append('angle',`${angle ? angle : ''}`) ;
return`${url}`
}


interface Asset {
    url: string;
    shotcode: {
        code: string;
        type: string;
        description: string;
    };
}

interface ProductFormat {
    assets: Asset[];
}

interface Product {
    productFormats: ProductFormat[];
}

export interface CarData {
    car: CarProps;
    products: Product[];
}

export const calculateCarRent=(city_mpg:number,year:number)=>{
    const basePricePerDay=50;
    const mileageFactor=0.1;
    const ageFactor=0.05;
    const milageRate=city_mpg*mileageFactor;
    const ageRate=(new Date().getFullYear()-year)*ageFactor;
    const renatRatePerDay=basePricePerDay+milageRate+ageRate;
    return renatRatePerDay.toFixed(0)
}


