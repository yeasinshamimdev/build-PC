export default function Loader() {
  return (
    <div className="border border-blue-200 shadow rounded-md px-2 pt-2 h-44 w-full mx-auto mb-8 max-w-[1280px]">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-400 h-40 w-60"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
