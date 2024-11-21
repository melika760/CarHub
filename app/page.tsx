import { CustomeFilter, Hero, SearchBar, CarCard } from "@/Components";
import { fetchcars } from "@/utils";
export default async function Home({searchParams}) {
  const allcars =await fetchcars(
    { manufacturare:searchParams.manufacturare || "Toyota",
      model:searchParams.model || "camry",
      fuel:searchParams.fuel || "",
      year:searchParams.year || "",
      limit:searchParams.limit ||5}
  );

  const isEmpty=!Array.isArray(allcars) || allcars.length<1 || !allcars;
  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
<h1 className="text-4xl font-extrabold">
Car Catalogue
</h1>
<p>Explore the cars you might like</p>
      </div>
  <div className="home__filters">
    <SearchBar/>
    <div className="home__filters-container">
<CustomeFilter title="fuel"/>
<CustomeFilter title="year"/>
    </div>
  </div>
  {!isEmpty ?(
    <section>
      <div className="home__cars-wrapper">
{allcars?.map((car)=>
<CarCard car={car}/>)}
      </div>
    </section>
  ):(
    <div className="home__error-container">
<h2 className="text-black text-xl font-bold">Oops,no results</h2>
<p>??</p>
    </div>
  )}
     </div>
    </main>
  );
}
