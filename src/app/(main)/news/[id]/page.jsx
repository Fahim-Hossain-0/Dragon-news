
import { getProducts } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  // Fetch products from the rice category
  const products = await getProducts("chal");

  // Find the specific product using its slug
  const product = products.find((item) => item.slug === id);

  if (!product) {
    notFound();
  }

  const {
    nameBn,
    category,
    categoryNameBn,
    categoryIcon,
    image,
    unit,
    today,
    yesterday,
    lastWeek,
    lastMonth,
    change,
    markets = [],
  } = product;

  const isUp = change?.dir === "up";
  const isDown = change?.dir === "down";

  const priceStats = [
    { label: "গতকাল", price: yesterday, icon: "📅" },
    { label: "গত ৭ দিন আগে", price: lastWeek, icon: "📊" },
    { label: "গত ৩০ দিন আগে", price: lastMonth, icon: "🗓️" },
  ];

  return (
    <main className="min-h-screen bg-base-200/50 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="breadcrumbs mb-6 text-sm text-base-content/60">
          <ul>
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href={`/category/${category}`}>
                {categoryNameBn}
              </Link>
            </li>
            <li className="font-semibold text-base-content">
              {nameBn}
            </li>
          </ul>
        </div>

        {/* Product overview */}
        <section className="grid gap-6 lg:grid-cols-5">
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-3">
            <div className="card-body p-6 sm:p-8">

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="badge badge-outline badge-lg gap-2">
                  <span>{categoryIcon}</span>
                  {categoryNameBn}
                </div>

                <span className="text-sm text-base-content/50">
                  পণ্যের আইডি: #{product.id}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-5">
                <div className="grid size-24 shrink-0 place-items-center rounded-3xl bg-base-200 text-5xl sm:size-32 sm:text-6xl">
                  {image || categoryIcon || "🛒"}
                </div>

                <div>
                  <h1 className="text-2xl font-bold sm:text-4xl">
                    {nameBn}
                  </h1>

                  <p className="mt-2 text-sm text-base-content/60">
                    বাংলাদেশের বাজারদর
                  </p>

                  <p className="mt-1 text-sm text-base-content/60">
                    একক: {unit === "kg" ? "কেজি" : unit}
                  </p>
                </div>
              </div>

              <div className="divider my-2" />

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-base-content/60">
                    আজকের বাজারদর
                  </p>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl">
                      ৳{today}
                    </span>

                    <span className="text-base text-base-content/60">
                      / {unit === "kg" ? "কেজি" : unit}
                    </span>
                  </div>
                </div>

                <div
                  className={`badge badge-lg gap-1 py-4 ${
                    isUp
                      ? "badge-error"
                      : isDown
                        ? "badge-success"
                        : "badge-ghost"
                  }`}
                >
                  {isUp ? "↗" : isDown ? "↘" : "→"}
                  {change?.pct > 0 ? "+" : ""}
                  {change?.pct ?? 0}%
                </div>
              </div>

              <p className="mt-4 text-sm text-base-content/60">
                {isUp
                  ? "আগের দিনের তুলনায় দাম বেড়েছে।"
                  : isDown
                    ? "আগের দিনের তুলনায় দাম কমেছে।"
                    : "দামে কোনো পরিবর্তন নেই।"}
              </p>
            </div>
          </div>

          {/* Price history */}
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-2">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-xl font-bold">
                📈 মূল্য পরিবর্তনের ইতিহাস
              </h2>

              <p className="text-sm text-base-content/60">
                আগের সময়ের সঙ্গে আজকের দামের তুলনা
              </p>

              <div className="mt-3 space-y-3">
                {priceStats.map((item) => {
                  const difference = today - item.price;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-base-200/70 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-base-content/60">
                            {item.icon} {item.label}
                          </p>
                          <p className="mt-1 text-xl font-bold">
                            ৳{item.price}
                          </p>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-sm font-semibold ${
                              difference > 0
                                ? "text-error"
                                : difference < 0
                                  ? "text-success"
                                  : "text-base-content/60"
                            }`}
                          >
                            {difference > 0 ? "+" : ""}
                            {difference}
                          </span>
                          <p className="text-xs text-base-content/50">
                            টাকা পরিবর্তন
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Market prices */}
        <section className="mt-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                🏪 বাজারভিত্তিক মূল্য
              </h2>
              <p className="mt-2 text-sm text-base-content/60">
                বিভিন্ন বাজারে {nameBn}-এর সর্বনিম্ন ও সর্বোচ্চ দাম
              </p>
            </div>

            <div className="badge badge-outline badge-lg">
              {markets.length} টি বাজার
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {markets.map((market, index) => (
              <article
                key={`${market.market}-${index}`}
                className="card border border-base-300 bg-base-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="card-body gap-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-xl">
                        🏬
                      </div>

                      <div>
                        <h3 className="font-bold leading-relaxed">
                          {market.market}
                        </h3>
                        <p className="mt-1 text-sm text-base-content/60">
                          📍 {market.division} বিভাগ
                        </p>
                      </div>
                    </div>

                    <span className="badge badge-ghost">
                      #{index + 1}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-base-200/70 p-4">
                    <p className="text-xs text-base-content/60">
                      মূল্যসীমা / {unit === "kg" ? "কেজি" : unit}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs text-success">সর্বনিম্ন</p>
                        <p className="text-xl font-bold text-success">
                          ৳{market.min}
                        </p>
                      </div>

                      <div className="h-8 w-px bg-base-300" />

                      <div className="text-right">
                        <p className="text-xs text-error">সর্বোচ্চ</p>
                        <p className="text-xl font-bold text-error">
                          ৳{market.max}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-base-300">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{
                          width: `${
                            market.max > 0
                              ? Math.min(
                                  100,
                                  (market.min / market.max) * 100
                                )
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-base-content/60">
                      দামের ব্যবধান
                    </span>
                    <span className="font-semibold">
                      ৳{market.max - market.min}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Advice */}
        <div className="alert mt-8 border border-base-300 bg-base-100">
          <span className="text-xl">💡</span>
          <div>
            <h3 className="font-bold">কেনাকাটার পরামর্শ</h3>
            <p className="text-sm text-base-content/70">
              কেনার আগে আপনার এলাকার কয়েকটি বাজারের দাম তুলনা করে
              নিন। বাজার ও পণ্যের মান অনুযায়ী দাম ভিন্ন হতে পারে।
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/category/${category}`}
            className="btn btn-outline"
          >
            ← {categoryNameBn} ক্যাটাগরিতে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;
