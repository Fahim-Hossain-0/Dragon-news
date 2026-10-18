
const Loading = () => {
  return (
    <main className="min-h-screen bg-base-200/50 py-8 md:py-12">
      <div className="mx-auto max-w-7xl animate-pulse px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb skeleton */}
        <div className="mb-6 flex gap-3">
          <div className="skeleton h-4 w-12" />
          <div className="skeleton h-4 w-4" />
          <div className="skeleton h-4 w-24" />
        </div>

        {/* Product overview skeleton */}
        <section className="grid gap-6 lg:grid-cols-5">

          {/* Product information */}
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-3">
            <div className="card-body p-6 sm:p-8">

              <div className="flex justify-between">
                <div className="skeleton h-7 w-24" />
                <div className="skeleton h-5 w-28" />
              </div>

              <div className="mt-5 flex items-center gap-5">
                <div className="skeleton size-24 shrink-0 rounded-3xl sm:size-32" />

                <div className="flex-1 space-y-3">
                  <div className="skeleton h-8 w-3/4" />
                  <div className="skeleton h-4 w-1/2" />
                  <div className="skeleton h-4 w-1/3" />
                </div>
              </div>

              <div className="divider my-2" />

              <div className="flex items-end justify-between gap-4">
                <div className="space-y-3">
                  <div className="skeleton h-4 w-28" />
                  <div className="skeleton h-12 w-36" />
                </div>
                <div className="skeleton h-9 w-20 rounded-full" />
              </div>

              <div className="skeleton mt-4 h-4 w-3/4" />
            </div>
          </div>

          {/* Price history skeleton */}
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-2">
            <div className="card-body space-y-4 p-6 sm:p-8">
              <div className="skeleton h-7 w-3/4" />
              <div className="skeleton h-4 w-full" />

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-base-200/70 p-4"
                >
                  <div className="space-y-3">
                    <div className="skeleton h-4 w-24" />
                    <div className="skeleton h-6 w-20" />
                  </div>
                  <div className="skeleton h-6 w-16" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market section heading */}
        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="space-y-3">
              <div className="skeleton h-8 w-56" />
              <div className="skeleton h-4 w-64 max-w-full" />
            </div>
            <div className="skeleton h-8 w-24 rounded-full" />
          </div>

          {/* Market cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body gap-4 p-5">

                  <div className="flex items-center gap-3">
                    <div className="skeleton size-11 shrink-0 rounded-xl" />
                    <div className="flex-1 space-y-2">
                      <div className="skeleton h-5 w-3/4" />
                      <div className="skeleton h-4 w-1/2" />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl bg-base-200/70 p-4">
                    <div className="skeleton h-4 w-28" />
                    <div className="flex justify-between gap-4">
                      <div className="skeleton h-7 w-20" />
                      <div className="skeleton h-7 w-20" />
                    </div>
                    <div className="skeleton h-2 w-full rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="skeleton h-4 w-24" />
                    <div className="skeleton h-4 w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advice skeleton */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
          <div className="skeleton size-8 shrink-0 rounded-full" />
          <div className="flex-1 space-y-3">
            <div className="skeleton h-5 w-40" />
            <div className="skeleton h-4 w-full" />
          </div>
        </div>

        {/* Back button skeleton */}
        <div className="skeleton mt-6 h-12 w-52 rounded-btn" />

      </div>
    </main>
  );
};

export default Loading;
