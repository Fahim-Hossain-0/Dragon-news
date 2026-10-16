This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Link from "next/link";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to load categories");
  }

  const data = await res.json();

  // Supports either an array or an object containing categories
  return Array.isArray(data) ? data : data.data ?? [];
};

const getProducts = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  const data = await res.json();

  // Supports either an array or an object containing products
  return Array.isArray(data) ? data : data.data ?? [];
};

const CategoryPage = async ({ params }) => {
  const { id } = await params;

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(id),
  ]);

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

        {products.length === 0 ? (
          <p className="text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/news/${product.slug}`}
                className="block"
              >
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
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
        )}
      </section>

      <aside className="md:col-span-3">
        <RightSidebar />
      </aside>
    </main>
  );
};

export default CategoryPage;
