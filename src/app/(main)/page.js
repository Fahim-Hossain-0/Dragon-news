
import Image from "next/image";

const getCategory = async()=>{
const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
const result = await res.json()
return result
}

export default async function Home() {
 const categories = await getCategory()
 console.log(categories);

  return (
    <>
    <div className="grid grid-cols-12 mt-8">
      <div className="col-span-3">All categoris
        <ul className="flex flex-col gap-4 mt-6">
          {categories.map(category=>{
          return  <li key={category.id} className="text-white bg-green-300 text-lg font-bold text-center rounded-2xl p-2">{category.nameBn}</li>
          })}
        </ul>
      </div>
      <div className="col-span-6">All news</div>
      <div className="col-span-3">Social Icon</div>
    </div>
    </>
  );
}
