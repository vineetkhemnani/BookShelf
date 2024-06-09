const ShimmerCard = () => {
  return (
    <>
      <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-slate-200 animate-pulse px-10 py-4 max-sm:px-5">
        <div className="md:w-60 h-64 bg-gray-300"></div>
        <div className="py-4">
          <div className="h-4 bg-gray-300 mb-1"></div>
          <div className="h-4 bg-gray-300 mb-1"></div>
          <p className="h-8 bg-gray-300 mb-2"></p>
        </div>
      </div>
     
    </>
  )
}
export default ShimmerCard