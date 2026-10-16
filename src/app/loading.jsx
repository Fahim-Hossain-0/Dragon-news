
export default function Loading() {
  return (
    <main className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12 animate-pulse">
      {/* Left sidebar */}
      <aside className="space-y-4 md:col-span-3">
        <div className="h-7 w-32 rounded bg-gray-200" />

        <div className="rounded-2xl border border-gray-200 p-4 space-y-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gray-200" />
              <div className="h-4 flex-1 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <section className="md:col-span-6">
        <div className="mb-6 h-8 w-52 rounded bg-gray-200" />

        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-5"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-gray-200" />
              <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />
              <div className="mb-3 h-4 w-20 rounded bg-gray-200" />
              <div className="mb-3 h-8 w-28 rounded bg-gray-200" />
              <div className="h-4 w-32 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>

      {/* Right sidebar */}
      <aside className="space-y-4 md:col-span-3">
        <div className="h-7 w-36 rounded bg-gray-200" />
        <div className="h-40 rounded-2xl bg-gray-200" />
        <div className="h-40 rounded-2xl bg-gray-200" />
      </aside>
    </main>
  );
}
