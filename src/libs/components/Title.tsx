const title = 'React Async for Client';

export default function Title() {
  return (
    <>
      <div className="relative w-full h-auto font-bold scale-100 hover:scale-110 transition-transform">
        <div className="inset-0 flex justify-center items-center bg-clip-text blur-2xl py-4 w-full text-7xl text-center text-transparent pointer-events-none select-none gradient-bg">
          {title}
        </div>
        <div className="absolute inset-0 flex justify-center items-center bg-clip-text py-4 w-full text-7xl text-center text-transparent select-auto gradient-bg">
          {title}
        </div>
      </div>
    </>
  );
}
