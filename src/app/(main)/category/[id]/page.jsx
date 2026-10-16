import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getProducts } from '@/lib/data';
import Link from 'next/link';
import React from 'react';



const CategoryPage = async ({params}) => {
    const {id} = await params;
    const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(id),
  ]);
    // console.log(products);
    return (
        <main className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12">
             <aside className="md:col-span-3">
               <LeftSidebar
                 categories={categories}
                 activeId={id}
               />
             </aside>
       
             <section className="min-w-0 md:col-span-6">
               <h1 className="mb-6 text-2xl font-bold">
                 আজকের বাজারদর
               </h1>
       
               <div className="grid gap-4 sm:grid-cols-2">
                 {products.map((product) => (
                   <Link key={product.id} href={`/news/${product.slug}`}>
                   <article
                     key={product.id}
                     className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                   >
                     <div className="mb-3 flex items-center justify-between">
                       <span className="text-3xl">
                         {product.image}
                       </span>
       
                       <span
                         className={
                           product.change?.dir === "up"
                             ? "text-red-600"
                             : "text-green-600"
                         }
                       >
                         {product.change?.dir === "up" ? "↑" : "↓"}{" "}
                         {product.change?.pct}%
                       </span>
                     </div>
       
                     <h2 className="text-xl font-bold text-gray-900">
                       {product.nameBn}
                     </h2>
       
                     <p className="mt-2 text-sm text-gray-500">
                       প্রতি {product.unit}
                     </p>
       
                     <p className="mt-1 text-3xl font-bold text-green-700">
                       ৳{product.today}
                     </p>
       
                     <p className="mt-2 text-sm text-gray-500">
                       গতকাল: ৳{product.yesterday}
                     </p>
                   </article>
                   </Link>
                 ))}
               </div>
             </section>
       
             <aside className="md:col-span-3">
               <RightSidebar/>
             </aside>
           </main>
    );
};

export default CategoryPage;