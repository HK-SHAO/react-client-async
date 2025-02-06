const title = 'React Async for Client';

export default function Title() {
  return (
    <>
      <div className="relative w-full min-h-[6rem] font-bold scale-120 hover:scale-150 transition-transform">
        <div className="absolute flex justify-center items-center bg-clip-text blur-2xl py-4 w-full font-stretch-50% text-7xl text-center text-transparent pointer-events-none select-none gradient-bg">
          {title}
        </div>
        <div className="absolute flex justify-center items-center bg-clip-text py-4 w-full font-stretch-50% text-7xl text-center text-transparent select-auto gradient-bg">
          {title}
        </div>
      </div>
    </>
  );
}
