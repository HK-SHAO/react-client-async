const title = 'React Async for Client';

export default function Title() {
  return (
    <>
      <div className="relative w-full min-h-[6rem] font-bold scale-110 hover:scale-130 transition-transform">
        <div className="absolute flex justify-center items-center bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 blur-2xl py-4 w-full font-stretch-50% text-7xl text-center text-transparent pointer-events-none select-none">
          {title}
        </div>
        <div className="absolute flex justify-center items-center bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 py-4 w-full font-stretch-50% text-7xl text-center text-transparent select-auto">
          {title}
        </div>
      </div>
    </>
  );
}
