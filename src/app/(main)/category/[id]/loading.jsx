
export default function Loading() {
  return (
    <main className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12 animate-pulse">
      {/* Left sidebar skeleton */}
      <aside className="space-y-4 md:col-span-3">
        <div className="h-7 w-32 rounded bg-gray-200" />

        <div className="space-y-3 rounded-2xl border border-gray-200 p-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gray-200" />
              <div className="h-4 flex-1 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </aside>

      {/* Product section skeleton */}
      <section className="min-w-0 md:col-span-6">
        <div className="mb-6 h-8 w-48 rounded bg-gray-200" />

        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-gray-200" />
                <div className="h-4 w-14 rounded bg-gray-200" />
              </div>

              <div className="mb-3 h-6 w-3/4 rounded bg-gray-200" />
              <div className="mb-3 h-4 w-20 rounded bg-gray-200" />
              <div className="mb-3 h-9 w-28 rounded bg-gray-200" />
              <div className="h-4 w-32 rounded bg-gray-200" />
            </article>
          ))}
        </div>
      </section>

      {/* Right sidebar skeleton */}
      <aside className="space-y-4 md:col-span-3">
        <div className="h-7 w-36 rounded bg-gray-200" />

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 p-4"
          >
            <div className="mb-3 h-24 rounded-xl bg-gray-200" />
            <div className="mb-2 h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        ))}
      </aside>
    </main>
  );
}
